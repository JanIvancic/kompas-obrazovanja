import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
  Tabs,
  Tab,
  Collapse,
} from "@mui/material";
import { schoolsData } from "./SchoolsData";

const SchoolProgramDetails = () => {
  const { schoolId } = useParams();
  const navigate = useNavigate();
  const [expandedProgram, setExpandedProgram] = useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const school = schoolsData.find((s) => s.id === parseInt(schoolId)) ||
                 schoolsData.find((_, index) => index === parseInt(schoolId));
  React.useEffect(() => {
    if (!school) {
      navigate("/schools");
    }
  }, [school, navigate]);

  if (!school) return null;

  const programOptions = [
    {
      name: "Opća gimnazija",
      details: {
        duration: "4 godine",
        students: "52",
        importantSubject: "Hrvatski jezik",
        languages: "Engleski, Njemački",
        optionalSubjects: "Etika, Vjeronauk",
        additionalOptions: "Mogućnost polaganja Njemačke jezične diplome",
        description: "Opća gimnazija omogućuje široko obrazovanje s naglaskom na društvene i prirodne znanosti. Učenici razvijaju kritičko mišljenje kroz interdisciplinarni pristup, a naglasak je i na razvoju komunikacijskih i istraživačkih vještina."
      }
    },
    {
      name: "Opća gimnazija uz skupinu predmeta na stranom jeziku",
      details: {
        duration: "4 godine",
        students: "26",
        importantSubject: "Hrvatski jezik, Engleski jezik",
        languages: "Engleski, Njemački, Francuski",
        optionalSubjects: "Etika, Vjeronauk",
        additionalOptions: "Nastava iz matematike, povijesti i geografije na engleskom jeziku",
        description: "Program opće gimnazije uz skupinu predmeta na stranom jeziku pruža učenicima mogućnost da određene predmete slušaju na engleskom jeziku. Ovaj program posebno je pogodan za učenike koji planiraju nastaviti školovanje u inozemstvu ili žele steći dodatne jezične kompetencije."
      }
    },
    {
      name: "Prirodoslovno-matematička gimnazija",
      details: {
        duration: "4 godine",
        students: "78",
        importantSubject: "Matematika, Fizika",
        languages: "Engleski, Njemački",
        optionalSubjects: "Etika, Vjeronauk",
        additionalOptions: "Dodatna nastava iz matematike i fizike, priprema za natjecanja",
        description: "Prirodoslovno-matematička gimnazija namijenjena je učenicima s posebnim interesom za matematiku, fiziku i prirodne znanosti. Program stavlja naglasak na STEM područje, a učenici imaju povećanu satnicu iz matematike i prirodoslovnih predmeta."
      }
    },
    {
      name: "Jezična gimnazija",
      details: {
        duration: "4 godine",
        students: "52",
        importantSubject: "Hrvatski jezik, Engleski jezik",
        languages: "Engleski, Njemački, Francuski, Talijanski, Španjolski",
        optionalSubjects: "Etika, Vjeronauk",
        additionalOptions: "Mogućnost učenja trećeg stranog jezika, priprema za međunarodne jezične ispite",
        description: "Jezična gimnazija stavlja naglasak na učenje stranih jezika i upoznavanje različitih kultura. Učenici uče najmanje dva strana jezika, a imaju mogućnost izbora i trećeg jezika. Program je idealan za učenike koji planiraju karijeru u područjima koja zahtijevaju izvrsno poznavanje stranih jezika."
      }
    },
  ];

  const sections = [
    {
      title: "Ljetni upisni rok",
      items: [
        "Početak prijava: 27. svibnja 2024.",
        "Prijava obrazovnih programa: 28. lipnja – 8. srpnja 2024.",
        "Objavljivanje konačnih ljestvica: 10. srpnja 2024.",
        "Dostava upisne dokumentacije: 10. – 12. srpnja 2024.",
      ],
    },
    {
      title: "Jesenski upisni rok",
      items: [
        "Početak prijava: 12. kolovoza 2024.",
        "Prijava obrazovnih programa: 19. – 23. kolovoza 2024.",
        "Objavljivanje konačnih ljestvica: 26. kolovoza 2024.",
        "Dostava upisne dokumentacije: 26. – 29. kolovoza 2024.",
      ],
    },
    {
      title: "Provjere znanja stranih jezika:",
      items: [
        "3. srpnja 2024.",
        "Engleski jezik: 9:00",
        "Njemački jezik: 10:00",
      ],
    },
    {
      title: "Za učenike s teškoćama:",
      items: [
        "Engleski jezik: 25. lipnja 2024. u 12:00",
        "Njemački jezik: 25. lipnja 2024. u 12:00",
      ],
    },
    {
      title: "Upisna dokumentacija:",
      items: [
        "Upisnica (dostavlja se online ili osobno)",
        "Potvrda liječnika školske medicine",
      ],
    },
    {
      title: "Strani jezici",
      items: ["Obvezni strani jezici:", "Engleski", "Njemački", "Francuski"],
    },
    {
      title: "Dodatne mogućnosti:",
      items: [
        "U programu jezične gimnazije učenici mogu odabrati treći strani jezik umjesto fizike, kemije ili biologije.",
        "Učenici B programa prirodoslovno-matematičke gimnazije mogu učiti dodatni strani jezik kroz fakultativnu nastavu.",
        "Škola nudi pripremu za Njemačku jezičnu diplomu.",
      ],
    },
    {
      title: "Izvannastavne aktivnosti",
      items: [
        "Škola nudi brojne izvannastavne aktivnosti, među kojima su:",
        "Debatni klub",
        "Novinarska grupa",
        "Dramska sekcija",
        "Ekološka grupa",
        "Filmska i fotografska sekcija",
        "Programerska grupa",
        "Sportske aktivnosti",
      ],
    },
  ];

  const handleToggleProgram = (index) => {
    if (expandedProgram === index) {
      setExpandedProgram(null);
    } else {
      setExpandedProgram(index);
    }
  };

  const handleBack = () => {
    navigate(`/schools/detail/${schoolId}`);
  };

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>

        <IconButton sx={{ mb: 2 }} onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>


        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 3,
          }}
        >
          {school.name} - Nastavni program
        </Typography>


        <Box sx={{ display: "flex", flexDirection: "column", mb: 8, width: "100%", maxWidth: "800px" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Obrazovni programi
          </Typography>

          {programOptions.map((option, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                mb: 2,
                overflow: 'hidden',
                borderRadius: "8px",
              }}
            >
              <Button
                fullWidth
                sx={{
                  bgcolor: expandedProgram === index ? "#1a93ee" : "#2fa4ff",
                  color: "white",
                  borderRadius: expandedProgram === index ? "8px 8px 0 0" : "8px",
                  justifyContent: "space-between",
                  px: 3,
                  py: 2,
                  textTransform: "none",
                  '&:hover': {
                    bgcolor: "#1a93ee",
                  }
                }}
                onClick={() => handleToggleProgram(index)}
                endIcon={expandedProgram === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  {option.name}
                </Typography>
              </Button>

              <Collapse in={expandedProgram === index}>
                <Box sx={{ p: 3, bgcolor: "#f8f9fa" }}>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
                    <Box sx={{ minWidth: "200px", flex: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                        Trajanje:
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {option.details.duration}
                      </Typography>

                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                        Broj učenika:
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {option.details.students}
                      </Typography>

                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                        Predmet od posebne važnosti za upis:
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {option.details.importantSubject}
                      </Typography>
                    </Box>

                    <Box sx={{ minWidth: "200px", flex: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                        Obvezni strani jezici:
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {option.details.languages}
                      </Typography>

                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                        Izborni predmeti:
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {option.details.optionalSubjects}
                      </Typography>

                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                        Dodatne mogućnosti:
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {option.details.additionalOptions}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {option.details.description}
                  </Typography>
                </Box>
              </Collapse>
            </Paper>
          ))}

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Upisi 2024/2025
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Stack spacing={6} sx={{ width: "100%", maxWidth: "800px", mx: "auto" }}>
            {sections.map((section, index) => (
              <Box key={index}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {section.title}
                </Typography>
                <List disablePadding>
                  {section.items.map((item, itemIndex) => (
                    <ListItem
                      key={itemIndex}
                      sx={{
                        px: 0,
                        py: 0.5,
                        display: "list-item",
                        listStyleType:
                          item.includes("Obvezni strani jezici:") ||
                          item.includes(
                            "Škola nudi brojne izvannastavne aktivnosti",
                          )
                            ? "none"
                            : "disc",
                        ml: 4,
                        fontWeight:
                          item.includes("Obvezni strani jezici:") ||
                          item.includes(
                            "Škola nudi brojne izvannastavne aktivnosti",
                          ) ||
                          item.includes("3. srpnja 2024.")
                            ? "bold"
                            : "normal",
                      }}
                    >
                      <Typography variant="h6">{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SchoolProgramDetails;


