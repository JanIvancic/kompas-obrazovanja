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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#0E185F", width: "100%" }}>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          {/* o nama - lijevo */}
          <Box sx={{ maxWidth: 420 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#F8F9FA",
                fontFamily: "Montserrat-Bold, Helvetica",
                fontWeight: 700,
                fontSize: 32,
                mb: 2,
                textAlign: "left",
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
                textAlign: "justify",
              }}
            >
              Kompas obrazovanja je dedicirana platforma za pomoć učenicima i
              studentima u informiranju i odabiru pravog smjera daljnjeg
              obrazovanja.
            </Typography>
          </Box>

          {/* kontakt - desno */}
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="body1"
              sx={{
                color: "#F8F9FA",
                fontFamily: "Lato-Regular, Helvetica",
                fontWeight: 400,
                fontSize: 22,
                textAlign: "left",
              }}
            >
              KONTAKT
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton
                component={Link}
                to="/support"
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
            component={Link}
            to="/support"
            variant="body1"
            sx={{
              color: "#F8F9FA",
              fontFamily: "Lato-SemiBold, Helvetica",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              textDecoration: "none",
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
