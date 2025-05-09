import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TestListPage = () => {
  const professionalTests = [
    {
      id: 1,
      title: "Test radnog stila",
      description: "Ispitivanje vašeg jedinstvenog pristupa radu i suradnji u timu.",
      buttonText: "Započni",
      hasResults: false,
    },
    {
      id: 2,
      title: "Karijerni orijentacijski test",
      description: "Otkrivanje karijernih smjerova koji odgovaraju vašim interesima.",
      buttonText: "Riješi opet",
      hasResults: true,
    },
  ];

  const personalityTests = [
    {
      id: 1,
      title: "Myers-Briggs test",
      description: "Istraživanje tipa osobnosti kroz prepoznatljive dimenzije.",
      buttonText: "Započni",
    },
    {
      id: 2,
      title: "Big five test",
      description: "Procjena pet osnovnih dimenzija osobnosti za dublji uvid.",
      buttonText: "Započni",
    },
    {
      id: 3,
      title: "Test emocionalne inteligencije",
      description: "Mjerenje sposobnosti prepoznavanja, razumijevanja i upravljanja vlastitim emocijama.",
      buttonText: "Započni",
    },
  ];

  const psychologicalTests = [
    {
      id: 1,
      title: "Standardni IQ test",
      description: "Procjena logičkog mišljenja i analitičkih sposobnosti.",
      buttonText: "Započni",
    },
    {
      id: 2,
      title: "Test brzog razmišljanja",
      description: "Mjerenje brzine procesuiranja informacija i rješavanja problema.",
      buttonText: "Započni",
    },
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: "#f8f9fa", 
        width: "100%",
        position: "relative"
      }}
    >
      {/* Back button - fixed to left side */}
      <Box sx={{ 
        position: "fixed", 
        top: "125px", 
        left: "20px", 
        zIndex: 10 
      }}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Box>

      {/* Left Google Ad */}
      <Box 
        sx={{ 
          position: "fixed", 
          left: "20px", 
          top: "50%", 
          transform: "translateY(-50%)",
          display: { xs: "none", md: "block" },
          zIndex: 5
        }}
      >
        <Box sx={{ height: 500, width: 300 }}>
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              width: 300,
              height: 500,
            }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
          ></ins>
        </Box>
      </Box>

      {/* Right Google Ad */}
      <Box 
        sx={{ 
          position: "fixed", 
          right: "20px", 
          top: "50%", 
          transform: "translateY(-50%)",
          display: { xs: "none", md: "block" },
          zIndex: 5
        }}
      >
        <Box sx={{ height: 500, width: 300 }}>
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              width: 300,
              height: 500,
            }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
          ></ins>
        </Box>
      </Box>

      {/* Main content */}
      <Container maxWidth="lg" sx={{ py: 5, px: { xs: 2, md: 4 } }}>
        {/* Header section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", color: "#292929", mb: 3 }}>
            Testovi
          </Typography>
          <Typography variant="h6" sx={{ color: "#292929", mb: 1 }}>
            Na ovoj stranici su dostupni razni testovi za određivanje vještina, IQ-a, testovi osobnosti (npr.
            Myers-Briggs, Big Five), itd.
          </Typography>
          <Typography variant="h6" sx={{ color: "#292929", fontWeight: "medium" }}>
            Rezultati testova će biti spremljeni i chatbot će Vam pomoći u njihovoj analizi.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Professional aptitude tests section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
              mb: 5,
            }}
          >
            Testovi profesionalnih sklonosti
          </Typography>
          <Grid container spacing={4}>
            {professionalTests.map((test) => (
              <Grid item xs={12} md={6} key={test.id}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#e3f1fb",
                    borderRadius: "20px",
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#292929",
                      mb: 2,
                    }}
                  >
                    {test.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#292929",
                      mb: 4,
                      flexGrow: 1,
                    }}
                  >
                    {test.description}
                  </Typography>
                  {test.hasResults ? (
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#2fa4ff",
                          borderRadius: "30px",
                          "&:hover": { bgcolor: "#2589d8" },
                        }}
                      >
                        {test.buttonText}
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#2fa4ff",
                          borderRadius: "30px",
                          "&:hover": { bgcolor: "#2589d8" },
                        }}
                      >
                        Rezultati
                      </Button>
                    </Stack>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#2fa4ff",
                        borderRadius: "30px",
                        alignSelf: "flex-start",
                        "&:hover": { bgcolor: "#2589d8" },
                      }}
                    >
                      {test.buttonText}
                    </Button>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Personality tests section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
              mb: 5,
            }}
          >
            Test osobnosti
          </Typography>
          <Grid container spacing={4}>
            {personalityTests.map((test) => (
              <Grid item xs={12} md={6} key={test.id}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#e3f1fb",
                    borderRadius: "20px",
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#292929",
                      mb: 2,
                    }}
                  >
                    {test.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#292929",
                      mb: 4,
                      flexGrow: 1,
                    }}
                  >
                    {test.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#2fa4ff",
                      borderRadius: "30px",
                      alignSelf: "flex-start",
                      "&:hover": { bgcolor: "#2589d8" },
                    }}
                  >
                    {test.buttonText}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Psychological tests section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
              mb: 5,
            }}
          >
            Psihologijsko testiranje
          </Typography>
          <Grid container spacing={4}>
            {psychologicalTests.map((test) => (
              <Grid item xs={12} md={6} key={test.id}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#e3f1fb",
                    borderRadius: "20px",
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#292929",
                      mb: 2,
                    }}
                  >
                    {test.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#292929",
                      mb: 4,
                      flexGrow: 1,
                    }}
                  >
                    {test.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#2fa4ff",
                      borderRadius: "30px",
                      alignSelf: "flex-start",
                      "&:hover": { bgcolor: "#2589d8" },
                    }}
                  >
                    {test.buttonText}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TestListPage;

