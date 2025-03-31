import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#0E185F", width: "100%" }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          {/* Left section - About Us */}
          <Box sx={{ maxWidth: 420 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#F8F9FA",
                fontFamily: "Montserrat-Bold, Helvetica",
                fontWeight: 700,
                fontSize: 32,
                mb: 3,
                textAlign: "left", // aligns "O nama" to the left
              }}
            >
              O nama
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#F8F9FA",
                fontFamily: "Lato-Medium, Helvetica",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 1.5,
                textAlign: "justify", // justifies the text below
              }}
            >
              Kompas obrazovanja je dedicirana platforma za pomoć učenicima i
              studentima u informiranju i odabiru pravog smjera daljnjeg
              obrazovanja.
            </Typography>
          </Box>

          {/* Right section - Contact */}
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="body1"
              sx={{
                color: "#F8F9FA",
                fontFamily: "Lato-Regular, Helvetica",
                fontWeight: 400,
                fontSize: 24,
                textAlign: "left",
              }}
            >
              KONTAKT
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton
                sx={{
                  bgcolor: "#F8F9FA",
                  width: 40,
                  height: 40,
                  boxShadow: "-2px 6px 24.8px rgba(0,0,0,0.15)",
                }}
              >
                <EmailIcon sx={{ color: "#0E185F", width: 20, height: 15 }} />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  color: "#F8F9FA",
                  fontFamily: "Lato-Regular, Helvetica",
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                kompas.obrazovanja@mail.com
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: "#F8F9FA", opacity: 0.5, my: 3 }} />

        <Stack direction="row" spacing={4}>
          <Typography
            variant="body1"
            sx={{
              color: "#F8F9FA",
              fontFamily: "Lato-SemiBold, Helvetica",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Pravila privatnosti
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#F8F9FA",
              fontFamily: "Lato-SemiBold, Helvetica",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Podrška
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
