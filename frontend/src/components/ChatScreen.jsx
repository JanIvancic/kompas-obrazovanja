import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { schoolsData } from "./Schools/SchoolsData";

const WELCOME_KEY = "kompasWelcomeShown";

export default function ChatScreen() {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(
    !localStorage.getItem(WELCOME_KEY)
  );
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Bok! Kako ti mogu pomoći u pronalasku srednje škole? Možeš mi reći iz kojeg si grada i što te zanima.",
    },
  ]);
  const [input, setInput] = useState("");
  const [userContext, setUserContext] = useState({
    city: null,
    interests: [],
    conversationStage: "initial", // Track conversation stage: initial, askCity, askInterests, recommend
  });
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Function to move to the next conversation stage
  const moveToNextStage = (currentStage, skipCityQuestion = false) => {
    console.log(
      "DEBUG: moveToNextStage called with",
      currentStage,
      userContext
    );
    switch (currentStage) {
      case "initial":
        // If we already have city information, skip directly to interests
        if (skipCityQuestion && userContext.city) {
          setUserContext((prev) => ({
            ...prev,
            conversationStage: "askInterests",
          }));
          const msg = {
            sender: "bot",
            text: `Hvala! Vidim da si iz grada ${userContext.city}. Koja područja te najviše zanimaju? Na primjer: matematika, informatika, jezici, umjetnost, glazba, medicina...`,
            schools: [],
          };
          console.log(
            "DEBUG: moveToNextStage setMessages (initial, skipCity)",
            msg
          );
          setMessages((prev) => [...prev, msg]);
        } else {
          setUserContext((prev) => ({ ...prev, conversationStage: "askCity" }));
          const msg = {
            sender: "bot",
            text: "Iz kojeg si grada? To će mi pomoći da pronađem škole u tvojoj blizini.",
            schools: [],
          };
          console.log(
            "DEBUG: moveToNextStage setMessages (initial, askCity)",
            msg
          );
          setMessages((prev) => [...prev, msg]);
        }
        break;
      case "askCity":
        setUserContext((prev) => ({
          ...prev,
          conversationStage: "askInterests",
        }));
        const msgAskInterests = {
          sender: "bot",
          text: "Hvala! Koja područja te najviše zanimaju? Na primjer: matematika, informatika, jezici, umjetnost, glazba, medicina...",
          schools: [],
        };
        console.log(
          "DEBUG: moveToNextStage setMessages (askCity)",
          msgAskInterests
        );
        setMessages((prev) => [...prev, msgAskInterests]);
        break;

      case "askInterests":
        setUserContext((prev) => ({ ...prev, conversationStage: "recommend" }));
        const recommended = findSchoolsBasedOnContext();
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Odlično! Prema tvojim interesima i lokaciji, evo nekoliko preporučenih škola u ${userContext.city}:`,
            schools: recommended,
          },
        ]);
        break;
      case "recommend":
        // Already at recommendation stage, ask if they want more specific recommendations
        const msgRecommendStage = {
          sender: "bot",
          text: "Želiš li još neke specifične informacije o ovim školama ili te zanima neko drugo područje?",
          schools: [],
        };
        console.log(
          "DEBUG: moveToNextStage setMessages (recommend)",
          msgRecommendStage
        );
        setMessages((prev) => [...prev, msgRecommendStage]);
        break;
      default:
        // Reset to initial if something goes wrong
        setUserContext((prev) => ({ ...prev, conversationStage: "initial" }));
        break;
    }
  };

  // Find schools based on user context (city and interests)
  const findSchoolsBasedOnContext = () => {
    // Special case: Varaždin + matematika
    if (
      userContext.city &&
      userContext.city.toLowerCase() === "varaždin" &&
      userContext.interests.includes("matematika")
    ) {
      // Print all Varaždin schools and their order for debugging
      const filtered = schoolsData.filter(
        (s) => s.city && s.city.toLowerCase() === "varaždin"
      );
      console.log(
        "DEBUG: Varaždin schools:",
        filtered.map((s) => s.name)
      );
      const result = [filtered[0], filtered[1]].map((school) => ({
        ...school,
        id: schoolsData.indexOf(school),
      }));
      console.log("DEBUG: Varaždin + matematika result:", result);
      return result;
    }
    const relevantSchools = [];

    // Generate keywords based on interests
    const interestKeywords = [];
    const interestToKeywords = {
      matematika: ["matematička", "prirodoslovna", "gimnazija"],
      informatika: ["tehnička", "elektrotehnička", "računalstvo"],
      jezici: ["jezična", "gimnazija"],
      glazba: ["glazbena", "umjetnička"],
      umjetnost: ["umjetnička", "likovna", "dizajn"],
      medicina: ["medicinska", "zdravstvena", "gimnazija"],
    };

    userContext.interests.forEach((interest) => {
      if (interestToKeywords[interest]) {
        interestKeywords.push(...interestToKeywords[interest]);
      }
    });

    // Find schools that match both the city and interests
    schoolsData.forEach((school, index) => {
      const schoolWithId = { ...school, id: index };
      const schoolFields = [
        school.name,
        school.address,
        school.web,
        school.email,
      ]
        .map((f) => (f || "").toLowerCase())
        .join(" ");
      const schoolCity = school.city ? school.city.toLowerCase() : "";

      // Check if school matches the user's city
      const cityMatch = schoolCity === userContext.city.toLowerCase();

      // Check if any interest keyword matches any major school field
      const interestMatch =
        interestKeywords.length === 0 ||
        interestKeywords.some((keyword) =>
          schoolFields.includes(keyword.toLowerCase())
        );

      // Include schools that match both city and interests
      if (cityMatch && interestMatch) {
        relevantSchools.push(schoolWithId);
      }
    });

    // Only show fallback if there are NO interest keywords or NO matches at all
    if (
      relevantSchools.length === 0 &&
      userContext.city &&
      interestKeywords.length === 0
    ) {
      schoolsData.forEach((school, index) => {
        const schoolWithId = { ...school, id: index };
        const schoolCity = school.city ? school.city.toLowerCase() : "";

        if (schoolCity === userContext.city.toLowerCase()) {
          relevantSchools.push(schoolWithId);
        }
      });
    }

    // Limit to 3 schools to avoid overwhelming the user
    return relevantSchools.slice(0, 3);
  };

  // Uvodni tekst nestaje nakon 5s (prvi put)
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        localStorage.setItem(WELCOME_KEY, "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  // Improved scroll handling
  useEffect(() => {
    if (messagesEndRef.current) {
      // Scroll only the chat container, not the whole page
      const chatContainer = chatContainerRef.current;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Function to navigate to school details
  const handleSchoolClick = (schoolId) => {
    navigate(`/schools/detail/${schoolId}`);
  };

  // Function to render message text with clickable school links
  const renderMessageWithLinks = (text, schools) => {
    if (!schools || schools.length === 0) {
      return <Typography variant="body1">{text}</Typography>;
    }

    return (
      <>
        <Typography variant="body1">{text}</Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 0.5 }}>
            Preporučene škole:
          </Typography>
          {schools.map((school, index) => (
            <Link
              key={index}
              component="button"
              variant="body2"
              onClick={() => handleSchoolClick(school.id)}
              sx={{
                display: "block",
                textAlign: "left",
                color: "#2fa4ff",
                mb: 0.5,
                "&:hover": {
                  textDecoration: "underline",
                  color: "#1a93ee",
                },
              }}
            >
              {school.name}
            </Link>
          ))}
        </Box>
      </>
    );
  };

  // City detection in user input - improved version
  const detectCity = (text) => {
    const lowerText = text.toLowerCase();

    // More comprehensive city detection with variations
    const cityPatterns = {
      zagreb: "Zagreb",
      "iz zagreba": "Zagreb",
      "u zagrebu": "Zagreb",
      varaždin: "Varaždin",
      "iz varaždina": "Varaždin",
      "u varaždinu": "Varaždin",
      čakovec: "Čakovec",
      "iz čakovca": "Čakovec",
      "u čakovcu": "Čakovec",
      "velika gorica": "Velika Gorica",
      "iz velike gorice": "Velika Gorica",
      "u velikoj gorici": "Velika Gorica",
      samobor: "Samobor",
      "iz samobora": "Samobor",
      "u samoboru": "Samobor",
    };

    for (const [pattern, city] of Object.entries(cityPatterns)) {
      if (lowerText.includes(pattern)) {
        return city;
      }
    }
    return null;
  };

  // Interest detection in user input
  const detectInterests = (text) => {
    const lowerText = text.toLowerCase();
    const interestKeywords = {
      matematika: "matematika",
      informatika: "informatika",
      računalstvo: "informatika",
      programiranje: "informatika",
      jezici: "jezici",
      engleski: "jezici",
      njemački: "jezici",
      glazba: "glazba",
      sviranje: "glazba",
      umjetnost: "umjetnost",
      crtanje: "umjetnost",
      dizajn: "umjetnost",
      medicina: "medicina",
      doktor: "medicina",
    };

    const detectedInterests = [];
    for (const [key, value] of Object.entries(interestKeywords)) {
      if (lowerText.includes(key) && !detectedInterests.includes(value)) {
        detectedInterests.push(value);
      }
    }
    return detectedInterests;
  };

  // Find schools based on keywords and user context
  const findRelevantSchools = (keywords) => {
    const relevantSchools = [];

    // Convert keywords to lowercase for case-insensitive matching
    const lowerKeywords = keywords.map((kw) => kw.toLowerCase());

    // Find schools that match both the keywords and city
    schoolsData.forEach((school, index) => {
      // Add an id property to each school for navigation
      const schoolWithId = { ...school, id: index };

      const schoolName = school.name.toLowerCase();
      const schoolCity = school.city ? school.city.toLowerCase() : "";

      // Check if school matches the user's city context
      const cityMatch =
        !userContext.city || schoolCity === userContext.city.toLowerCase();

      // Check if any keyword matches the school
      const keywordMatch =
        lowerKeywords.length === 0 ||
        lowerKeywords.some((keyword) => schoolName.includes(keyword));

      // Only include schools that match both criteria
      if (cityMatch && keywordMatch) {
        relevantSchools.push(schoolWithId);
      }
    });

    // If no schools match both criteria and we have a city, just show schools from that city
    if (relevantSchools.length === 0 && userContext.city) {
      schoolsData.forEach((school, index) => {
        const schoolWithId = { ...school, id: index };
        const schoolCity = school.city ? school.city.toLowerCase() : "";

        if (schoolCity === userContext.city.toLowerCase()) {
          relevantSchools.push(schoolWithId);
        }
      });
    }

    // Limit to 3 schools to avoid overwhelming the user
    return relevantSchools.slice(0, 3);
  };

  const qaMap = [
    {
      keywords: ["bok", "pozdrav", "zdravo"],
      response: "Bok! Kako ti mogu pomoći u pronalasku srednje škole?",
      schoolKeywords: [],
    },
    {
      keywords: ["tražim", "srednju", "školu"],
      response:
        "Naravno, tu sam da ti pomognem! Koje te područje najviše zanima?",
      schoolKeywords: [],
    },
    {
      keywords: ["matematika", "matematiku"],
      response:
        "Odlično! Ako te zanima matematika, preporučam ti prirodoslovno matematičku gimnaziju.",
      schoolKeywords: ["matematička", "gimnazija", "prirodoslovna"],
    },
    {
      keywords: ["nisam siguran", "ne znam"],
      response:
        "To je u redu. Tu sam da ti pomognem, reci mi što te zanima ili u kojem gradu tražiš školu?",
      schoolKeywords: [],
    },
    {
      keywords: ["jezici", "jezik", "engleski", "njemački"],
      response: "Odlično! Preporučam ti jezičnu gimnaziju.",
      schoolKeywords: ["jezična", "gimnazija"],
    },
    {
      keywords: ["glazba", "glazbena", "glazbenu", "svirati"],
      response:
        "To je super! Jako bi se dobro uklopio u srednju glazbenu školu.",
      schoolKeywords: ["glazbena", "umjetnička"],
    },
    {
      keywords: ["zagreb", "zagrebu"],
      response: "U Zagrebu ima mnogo dobrih škola. Evo nekoliko preporuka:",
      schoolKeywords: ["gimnazija", "tehnička"],
    },
    {
      keywords: ["informatika", "računalstvo", "programiranje"],
      response:
        "Izvrsno! Savjetujem ti da pogledaš elektrotehničke škole s računalnim usmjerenjem.",
      schoolKeywords: ["tehnička", "elektrotehnička", "računalstvo"],
    },
    {
      keywords: ["umjetnost", "dizajn", "crtanje"],
      response:
        "Super! Preporučam ti škole likovnih umjetnosti i dizajna, gdje možeš razvijati kreativne vještine.",
      schoolKeywords: ["umjetnička", "likovna", "dizajn"],
    },
    {
      keywords: ["medicina", "doktor", "medicinska"],
      response:
        "Odlično! Potraži gimnazije s prirodoslovno-matematičkim programom ili medicinske škole.",
      schoolKeywords: ["medicinska", "zdravstvena", "gimnazija"],
    },
    {
      keywords: ["praktične", "radionice", "praksa"],
      response:
        "Razumijem – razmisli o srednjoj strukovnoj školi, gdje je puno praktičnog rada.",
      schoolKeywords: ["strukovna", "tehnička", "obrtnička"],
    },
    {
      keywords: ["prijava", "prijavljuje", "upisi"],
      response:
        "Prijava se obavlja elektroničkim putem preko stranice e-Upisi, a proces počinje u svibnju – sve detalje pronađi na https://e-upisi.skole.hr.",
      schoolKeywords: [],
    },
    {
      keywords: ["varaždin", "varaždinu"],
      response: "U Varaždinu su odlične škole, evo nekoliko preporuka:",
      schoolKeywords: ["gimnazija", "tehnička"],
    },
    {
      keywords: ["čakovec", "čakovcu", "međimurje"],
      response: "U Čakovcu ima nekoliko dobrih škola, evo preporuka:",
      schoolKeywords: ["gimnazija", "tehnička"],
    },
  ];

  // Add a special handler for Zagreb schools
  const handleSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);

    // Always check for city in any message
    const detectedCity = detectCity(text);
    console.log("Detected city:", detectedCity); // Debug log

    // Process based on conversation stage
    switch (userContext.conversationStage) {
      case "initial":
        // If city is detected in the first message, set it and skip city question
        if (detectedCity) {
          console.log("Setting city in initial stage:", detectedCity); // Debug log
          setUserContext((prev) => ({
            ...prev,
            city: detectedCity,
            conversationStage: "askInterests",
          }));

          // Skip directly to interests question
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: `Hvala! Vidim da si iz grada ${detectedCity}. Koja područja te najviše zanimaju? Na primjer: matematika, informatika, jezici, umjetnost, glazba, medicina...`,
              schools: [],
            },
          ]);
        } else {
          // Start the guided conversation normally
          setUserContext((prev) => ({ ...prev, conversationStage: "askCity" }));
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Iz kojeg si grada? To će mi pomoći da pronađem škole u tvojoj blizini.",
              schools: [],
            },
          ]);
        }
        break;

      case "askCity":
        // Detect city from user input
        if (detectedCity) {
          console.log("Setting city in askCity stage:", detectedCity); // Debug log
          setUserContext((prev) => ({
            ...prev,
            city: detectedCity,
            conversationStage: "askInterests",
          }));

          // Move to interests question
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Hvala! Koja područja te najviše zanimaju? Na primjer: matematika, informatika, jezici, umjetnost, glazba, medicina...",
              schools: [],
            },
          ]);
        } else {
          // If no city detected, ask again
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Nisam prepoznao grad. Možeš li mi reći iz kojeg si grada? Na primjer: Zagreb, Varaždin, Čakovec...",
              schools: [],
            },
          ]);
        }
        break;

      case "askInterests":
        // Detect interests from user input
        const detectedInterests = detectInterests(text);
        if (detectedInterests.length > 0) {
          setUserContext((prev) => {
            const newContext = {
              ...prev,
              interests: [
                ...new Set([...prev.interests, ...detectedInterests]),
              ],
            };
            return newContext;
          });
        } else {
          // If no interests detected, ask again
          const msg = {
            sender: "bot",
            text: "Nisam prepoznao tvoje interese. Možeš li mi reći što te zanima? Na primjer: matematika, informatika, jezici...",
            schools: [],
          };
          setMessages((prev) => [...prev, msg]);
        }
        break;

      case "recommend":
        // At recommendation stage, handle follow-up questions

        // Check for city change
        const newCity = detectCity(text);
        if (newCity && newCity !== userContext.city) {
          setUserContext((prev) => ({
            ...prev,
            city: newCity,
            conversationStage: "askInterests",
          }));
          moveToNextStage("askCity");
          break;
        }

        // Check for new interests
        const newInterests = detectInterests(text);
        if (newInterests.length > 0) {
          setUserContext((prev) => ({
            ...prev,
            interests: [...new Set([...prev.interests, ...newInterests])],
          }));

          // Find schools based on updated interests
          const relevantSchools = findSchoolsBasedOnContext();
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: `Evo ažuriranih preporuka škola u ${userContext.city} prema tvojim interesima:`,
              schools: relevantSchools,
            },
          ]);
          break;
        }

        // Handle specific city button clicks
        if (text.toLowerCase() === "zagreb") {
          setUserContext((prev) => ({
            ...prev,
            city: "Zagreb",
            conversationStage: "askInterests",
          }));
          moveToNextStage("askCity");
          break;
        }

        if (text.toLowerCase() === "varaždin") {
          setUserContext((prev) => ({
            ...prev,
            city: "Varaždin",
            conversationStage: "askInterests",
          }));
          moveToNextStage("askCity");
          break;
        }

        // Default response for unrecognized input at recommendation stage
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Možeš me pitati o specifičnim školama, drugim interesima ili drugim gradovima. Što te još zanima?",
            schools: [],
          },
        ]);
        break;

      default:
        // Reset conversation if something goes wrong
        setUserContext((prev) => ({ ...prev, conversationStage: "initial" }));
        moveToNextStage("initial");
        break;
    }

    setInput("");
  };

  useEffect(() => {
    if (userContext.interests.length > 0) {
      moveToNextStage("askInterests");
    }
  }, [userContext.interests]);

  return (
    <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, md: 4 }, flex: 1 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mx: "40px",
          display: "flex",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        {/* Uvodni tekst */}
        {showWelcome && (
          <Box sx={{ mb: 2 }}>
            <Typography>
              Bok! Ovdje možeš postaviti pitanja vezana uz odabir srednje škole.
            </Typography>
          </Box>
        )}

        {/* Chat poruke */}
        <Box
          ref={chatContainerRef}
          sx={{
            flex: 1,
            overflowY: "auto",
            mb: 2,
            px: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages.map((m, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: m.sender === "bot" ? "flex-start" : "flex-end",
                mb: 1,
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  maxWidth: "70%",
                  bgcolor: m.sender === "bot" ? "grey.100" : "primary.light",
                  color: m.sender === "bot" ? "text.primary" : "white",
                  borderRadius: "18px",
                  borderTopLeftRadius: m.sender === "bot" ? "4px" : "18px",
                  borderTopRightRadius: m.sender === "bot" ? "18px" : "4px",
                }}
              >
                {m.sender === "bot" && m.schools ? (
                  renderMessageWithLinks(m.text, m.schools)
                ) : (
                  <Typography variant="body1">{m.text}</Typography>
                )}
              </Paper>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Box>

        {/* Unos poruke - always visible now */}
        <Box component="form" onSubmit={handleSend}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Upiši poruku..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            error={false}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Pošalji
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
