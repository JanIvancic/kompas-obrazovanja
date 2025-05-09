import React from "react";
import {
  Box,
  Container,
  Typography,
  Button
} from "@mui/material";

const TestsPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flex: 1,            // ← allow this Box to fill its parent
        minHeight: 0,       // ← let its flex children size properly
        position: "relative"
      }}
    >
      {/* Main content area */}
      <Box
        sx={{
          flex: 1,           // ← fill remaining vertical space
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 0,
          py: 4
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: 4,
            pb: 0
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                color: "#292929",
                fontSize: { xs: "36px", sm: "50px" },
                letterSpacing: "0.5px"
              }}
            >
              Testovi
            </Typography>

            <Box sx={{ maxWidth: "1250px" }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Lato, Helvetica",
                  fontWeight: 400,
                  color: "#292929",
                  fontSize: { xs: "18px", sm: "24px" },
                  letterSpacing: "0.1px",
                  mb: 1
                }}
              >
                Testovi su dostupni isključivo Premium korisnicima.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#2fa4ff",
                borderRadius: "30px",
                padding: { xs: "8px 24px", sm: "12px 40px" },
                textTransform: "none",
                fontFamily: "Lato, Helvetica",
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "20px" },
                "&:hover": {
                  backgroundColor: "#2589d8"
                }
              }}
            >
              Postani Premium korisnik
            </Button>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "Lato, Helvetica",
                fontWeight: 300,
                letterSpacing: "1px",
                fontSize: { xs: "14px", sm: "16px" }
              }}
            >
              Postani Premium korisnik za samo 4,99€
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Left Google Ad */}
      <Box
        sx={{
          position: "fixed",
          left: 20,
          top: "50%",
          transform: "translateY(-50%)",
          display: { xs: "none", md: "block" },
          zIndex: 0
        }}
      >
        <Box sx={{ height: 500, width: 300 }}>
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: 300,
              height: 500
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
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
          display: { xs: "none", md: "block" },
          zIndex: 0
        }}
      >
        <Box sx={{ height: 500, width: 300 }}>
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: 300,
              height: 500
            }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
          ></ins>
        </Box>
      </Box>
    </Box>
  );
};

export default TestsPage;
