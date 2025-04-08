import ExploreIcon from "@mui/icons-material/Explore";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";

const HeadLink = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  color: "#292929",
  fontSize: 16,
  letterSpacing: "0.5px",
  lineHeight: "24px",
  cursor: "pointer",
  fontWeight: active ? 700 : 400,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const Header = () => {
  const navLinks = [
    { title: "Početna", active: true, route: "/" },
    { title: "Chatbot", active: false },
    { title: "Testovi", active: false },
    { title: "Popis škola", active: false },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "#f8f9fa", color: "#292929" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ height: 95, justifyContent: "space-between" }}
        >
          {/* logo, ime */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <ExploreIcon sx={{ fontSize: 56, color: "#2fa4ff" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 500,
                fontSize: 24,
              }}
            >
              Kompas obrazovanja
            </Typography>
          </Stack>

          {/* nav */}
          <Stack direction="row" spacing={8}>
            {navLinks.map((link, index) =>
              link.route ? (
                <Link
                  key={index}
                  to={link.route}
                  style={{ textDecoration: "none" }}
                >
                  <HeadLink active={link.active ? 1 : 0}>{link.title}</HeadLink>
                </Link>
              ) : (
                <HeadLink key={index} active={link.active ? 1 : 0}>
                  {link.title}
                </HeadLink>
              )
            )}
          </Stack>

          {/* auth */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2fa4ff",
                borderRadius: "30px",
                textTransform: "none",
                fontSize: 16,
                px: 3,
                py: 1.5,
                fontFamily: "Lato, sans-serif",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "#1a93ee",
                },
              }}
              component={Link}
              to="/register"
            >
              Registriraj se
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2fa4ff",
                borderRadius: "30px",
                textTransform: "none",
                fontSize: 16,
                px: 3,
                py: 1.5,
                fontFamily: "Lato, sans-serif",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "#1a93ee",
                },
              }}
              component={Link}
              to="/login"
            >
              Prijavi se
            </Button>
          </Stack>
        </Toolbar>
      </Container>
      <Box sx={{ height: 1, bgcolor: "#e0e0e0", width: "100%" }} />
    </AppBar>
  );
};

export default Header;
