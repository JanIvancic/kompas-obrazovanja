import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
} from "@mui/material";
import { schoolsData } from "./SchoolsData";

const SchoolDetailPage = () => {
  const { schoolId } = useParams();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);

  // Find the school by ID
  const school = schoolsData.find((s) => s.id === parseInt(schoolId)) || 
                 schoolsData.find((_, index) => index === parseInt(schoolId));

  // If school not found, redirect to schools list
  React.useEffect(() => {
    if (!school) {
      navigate("/schools");
    }
  }, [school, navigate]);

  if (!school) return null;

  // Data for program options
  const programOptions = [
    "Opća gimnazija",
    "Opća gimnazija uz skupinu predmeta na stranom jeziku",
    "Prirodoslovno-matematička gimnazija",
    "Jezična gimnazija",
  ];

  // Data for timeline sections
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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleBack = () => {
    navigate("/schools");
  };

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
        {/* Back button */}
        <IconButton sx={{ mb: 2 }} onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>

        {/* Main title */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 3,
          }}
        >
          {school.name}
        </Typography>

        {/* School basic info */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            {school.address}
          </Typography>
          <Typography variant="body2">tel: {school.tel}</Typography>
          <Typography variant="body2">fax: {school.fax}</Typography>
          <Typography variant="body2">e-mail: {school.email}</Typography>
          <Typography variant="body2">web: {school.web}</Typography>
        </Box>

        {/* Tabs for different sections */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="school information tabs">
            <Tab label="Nastavni program" />
            <Tab label="O školi" />
            <Tab label="Galerija" />
            <Tab label="Kontakt" />
          </Tabs>
        </Box>

        {/* Tab content */}
        {tabValue === 0 && (
          <>
            {/* Program selection */}
            <Box sx={{ display: "flex", mb: 8 }}>
              <Box sx={{ width: "60%" }}>
                <Stack spacing={2} sx={{ mb: 4 }}>
                  {programOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      sx={{
                        bgcolor: "#2fa4ff",
                        borderRadius: "30px",
                        justifyContent: "flex-start",
                        px: 3,
                        py: 1.5,
                        textTransform: "none",
                      }}
                      endIcon={<ExpandMoreIcon />}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight:
                            option ===
                            "Opća gimnazija uz skupinu predmeta na stranom jeziku"
                              ? 600
                              : 400,
                        }}
                      >
                        {option}
                      </Typography>
                    </Button>
                  ))}
                </Stack>

                <Divider sx={{ mb: 4 }} />

                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: "bold", mb: 3 }}
                >
                  Upisi 2024/2025
                </Typography>
              </Box>

              <Box sx={{ width: "40%", position: "relative" }}>
                <Paper
                  elevation={3}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "#eaeff5",
                    maxWidth: "80%",
                  }}
                >
                  <Typography variant="h6">
                    Bok! Klikni na kompas kako bi mogao nastaviti razgovor i dobiti
                    odgovore na bilo kakva pitanja.
                  </Typography>
                </Paper>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -30,
                    right: 0,
                    width: 60,
                    height: 60,
                    bgcolor: "#0e185f",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Box>
            </Box>

            {/* Information sections */}
            <Box sx={{ display: "flex" }}>
              {/* Left sidebar */}
              <Box sx={{ width: 160, bgcolor: "#0e185f", mr: 4 }} />

              {/* Main content */}
              <Stack spacing={6} sx={{ width: "60%" }}>
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

              {/* Right sidebar */}
              <Box sx={{ width: 300, bgcolor: "#0e185f", ml: 4 }} />
            </Box>
          </>
        )}

        {tabValue === 1 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
              O školi
            </Typography>
            <Typography variant="body1" paragraph>
              {school.name} je renomirana obrazovna institucija s dugom tradicijom izvrsnosti. 
              Osnovana s ciljem pružanja kvalitetnog obrazovanja, škola se ističe po svojim 
              akademskim postignućima i svestranom pristupu razvoju učenika.
            </Typography>
            <Typography variant="body1" paragraph>
              Naša misija je pripremiti učenike za izazove budućnosti kroz kvalitetno obrazovanje, 
              razvoj kritičkog mišljenja i poticanje kreativnosti. Vjerujemo da svaki učenik ima 
              jedinstvene talente i potencijale koje nastojimo prepoznati i razvijati.
            </Typography>
            <Typography variant="body1" paragraph>
              Škola je opremljena suvremenim učionicama, specijaliziranim kabinetima, 
              knjižnicom i sportskim sadržajima koji omogućuju kvalitetno izvođenje nastave 
              i izvannastavnih aktivnosti.
            </Typography>
          </Box>
        )}

        {tabValue === 2 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
              Galerija
            </Typography>
            <Typography variant="body1">
              Galerija slika trenutno nije dostupna.
            </Typography>
          </Box>
        )}

        {tabValue === 3 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
              Kontakt
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <strong>Adresa:</strong> {school.address}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <strong>Telefon:</strong> {school.tel}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <strong>Fax:</strong> {school.fax}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <strong>E-mail:</strong> {school.email}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <strong>Web:</strong> {school.web}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default SchoolDetailPage;