import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#f8f9fa",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 3,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 700,
                  color: "#292929",
                  fontSize: "50px",
                  letterSpacing: "0.5px",
                  mb: 2,
                }}
              >
                Dobro došli u Kompas obrazovanja
              </Typography>
    
              <Box sx={{ maxWidth: "1250px" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Lato, Helvetica",
                    fontWeight: 400,
                    color: "#292929",
                    fontSize: "24px",
                    letterSpacing: "0.1px",
                    mb: 1.5,
                  }}
                >
                  Otkrij savršenu srednju školu ili fakultet na temelju tvojih
                  interesa i osobina uz pomoć našeg AI agenta.
                </Typography>
    
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Lato, Helvetica",
                    fontWeight: 400,
                    color: "#292929",
                    fontSize: "24px",
                    letterSpacing: "0.1px",
                  }}
                >
                  Započni svoje obrazovno ili karijerno putovanje uz Kompas
                  obrazovanja
                </Typography>
              </Box>
    
              <Button
                component={Link}
                to="/chat"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#2fa4ff",
                  borderRadius: "30px",
                  padding: "12px 40px",
                  textTransform: "none",
                  fontFamily: "Lato, Helvetica",
                  fontWeight: 500,
                  fontSize: "20px",
                  "&:hover": {
                    backgroundColor: "#2589d8",
                  },
                }}
              >
                Započni razgovor
              </Button>
            </Box>
          </Container>
        </Box>
      );
    };
    
export default LandingPage;
