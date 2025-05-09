import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { HeaderSection } from "./HeaderSection";
import { NavigationSection } from "./NavigationSection";
import { ProgramsSection } from "./ProgramsSection";
import { SchoolDescriptionSection } from "./SchoolDescriptionSection";
import { StudentExperiencesSection } from "./StudentExperiencesSection";
import { TestimonialsSection } from "./TestimonialsSection";

const SchoolDetails = () => {
  const contactData = [
    { label: "Telefon:", value: "{schoolPhone}" },
    { label: "Email:", value: "{schoolEmail}", isEmail: true },
    { label: "Fax:", value: "{schoolFax}" },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box sx={{ width: "100%", maxWidth: 1920 }}>
        <Box>
          <HeaderSection />

          <Box sx={{ bgcolor: "#f8f9fa", pt: "125px", position: "relative" }}>
            <Box sx={{ p: 2, ml: 12 }}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ minWidth: 30, height: 30, p: 0 }}
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                ml: 16,
                mt: 4,
                fontFamily: "Montserrat-Bold, Helvetica",
                fontWeight: "bold",
                fontSize: 50,
                color: "#292929",
              }}
            >
              {"{schoolName}"}
            </Typography>

            <Grid container sx={{ mt: 4, ml: 16, width: "calc(100% - 16px)" }}>
              <Grid item xs={12} md={7}>
                <Box
                  component="img"
                  src="{schoolImageUrl}"
                  alt="{schoolName}"
                  sx={{
                    width: "100%",
                    maxWidth: 1115,
                    height: "auto",
                    maxHeight: 624,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
              </Grid>
            </Grid>

            <Typography
              variant="h2"
              sx={{
                ml: 16,
                mt: 8,
                fontFamily: "Montserrat-Bold, Helvetica",
                fontWeight: "bold",
                fontSize: 32,
                color: "#292929",
              }}
            >
              Opis škole
            </Typography>

            <ProgramsSection />

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ ml: 16, mt: 4 }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato-SemiBold, Helvetica",
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#292929",
                }}
              >
                Web stranica:
              </Typography>
              <Link
                href="{schoolWebsite}"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontFamily: "Lato-Regular, Helvetica",
                  fontSize: 24,
                  color: "#292929",
                  textDecoration: "underline",
                }}
              >
                {"{schoolWebsite}"}
              </Link>
            </Stack>

            <Box sx={{ mt: 4, ml: 16 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Montserrat-Bold, Helvetica",
                    fontWeight: "bold",
                    fontSize: 32,
                    color: "#292929",
                  }}
                >
                  Nastavni program
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "56px",
                    borderColor: "#292929",
                    color: "#292929",
                    fontFamily: "Lato-Medium, Helvetica",
                    fontSize: 14,
                    py: 0.5,
                    px: 2,
                    boxShadow: "0px 0px 10px #2929291a",
                  }}
                >
                  Saznaj više
                </Button>
              </Stack>

              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Lato-Regular, Helvetica",
                  fontSize: 24,
                  color: "#292929",
                  letterSpacing: "0.5px",
                  lineHeight: "36px",
                  maxWidth: 973,
                }}
              >
                {"{curriculumDescription}"}
              </Typography>
            </Box>

            <StudentExperiencesSection />

            <Box sx={{ mt: 6, ml: 16 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Montserrat-Bold, Helvetica",
                  fontWeight: "bold",
                  fontSize: 32,
                  color: "#292929",
                }}
              >
                Iskustva prijašnjih učenika
              </Typography>
            </Box>

            <Box sx={{ mt: 2, ml: "auto", mr: 16 }}>
              <Button
                variant="contained"
                endIcon={<ChevronRightIcon />}
                sx={{
                  bgcolor: "#2fa4ff",
                  borderRadius: "30px",
                  px: 3,
                  py: 1.5,
                  fontFamily: "Lato-Medium, Helvetica",
                  fontSize: 24,
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Program
              </Button>
            </Box>

            <SchoolDescriptionSection />

            <Box sx={{ mt: 2, ml: "auto", mr: 16 }}>
              <Button
                variant="contained"
                endIcon={<ChevronRightIcon />}
                sx={{
                  bgcolor: "#2fa4ff",
                  borderRadius: "30px",
                  px: 3,
                  py: 1.5,
                  fontFamily: "Lato-Medium, Helvetica",
                  fontSize: 24,
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                Najnovije
              </Button>
            </Box>

            <TestimonialsSection />

            <Grid container spacing={4} sx={{ mt: 4, ml: 14, mr: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Montserrat-Bold, Helvetica",
                    fontWeight: "bold",
                    fontSize: 32,
                    color: "#292929",
                    mb: 2,
                  }}
                >
                  Lokacija
                </Typography>
                <Box
                  component="img"
                  src="{schoolMapImageUrl}"
                  alt="Map"
                  sx={{
                    width: "100%",
                    maxWidth: 1105,
                    height: "auto",
                    maxHeight: 377,
                  }}
                />
                <Typography
                  sx={{
                    mt: 2,
                    fontFamily: "Lato-Medium, Helvetica",
                    fontSize: 24,
                    color: "#292929",
                  }}
                >
                  <Box component="span" sx={{ fontWeight: "medium" }}>
                    Adresa:{" "}
                  </Box>
                  {"{schoolAddress}"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Montserrat-Bold, Helvetica",
                    fontWeight: "bold",
                    fontSize: 32,
                    color: "#292929",
                    mb: 2,
                  }}
                >
                  Kontakt podaci
                </Typography>
                <Stack spacing={2}>
                  {contactData.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontFamily: "Lato-Medium, Helvetica",
                        fontSize: 20,
                        color: "#292929",
                        lineHeight: "30px",
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: "medium" }}>
                        {item.label}
                      </Box>{" "}
                      {item.isEmail ? (
                        <Link
                          href={`mailto:${item.value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            fontFamily: "Lato-Regular, Helvetica",
                            textDecoration: "underline",
                          }}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <Box
                          component="span"
                          sx={{
                            fontFamily: "Lato-Regular, Helvetica",
                          }}
                        >
                          {item.value}
                        </Box>
                      )}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>

            <NavigationSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SchoolDetails;