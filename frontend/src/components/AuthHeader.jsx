import ExploreIcon from "@mui/icons-material/Explore";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

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

const AuthHeader = () => {
  const navigate = useNavigate();
  
  const navLinks = [
    { title: "Početna", active: true, route: "/" },
    { title: "Chatbot", active: false, route: "/chat" },
    { title: "Testovi", active: false, route: "/tests" },
    { title: "Popis škola", active: false, route: "/schools" },
  ];

  const handleLogout = () => {
    // Clear any auth state/tokens here
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

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
            <Box
              sx={{
                width: "56px",
                height: "56px",
                bgcolor: "#0e185f",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <ExploreIcon sx={{ fontSize: 32, color: "white" }} />
            </Box>
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

          {/* User info and logout */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8
                }
              }}
              onClick={handleProfileClick}
            >
              <Avatar 
                sx={{ 
                  bgcolor: "#1976d2",
                  cursor: 'pointer'
                }}
              >
                TI
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: "0.5px",
                  lineHeight: "24px",
                  color: "#0e185f",
                  ml: 2,
                  cursor: 'pointer'
                }}
              >
                Tvoje Ime
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                ml: 2,
                bgcolor: "#0e185f",
                borderRadius: "56px",
                height: "48px",
                px: 3,
                textTransform: "none",
                boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.18)",
                "&:hover": {
                  bgcolor: "#0a1245",
                },
              }}
              onClick={handleLogout}
            >
              <Typography
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Odjavi se
              </Typography>
            </Button>
          </Stack>
        </Toolbar>
      </Container>
      <Box sx={{ height: 1, bgcolor: "#e0e0e0", width: "100%" }} />
    </AppBar>
  );
};

export default AuthHeader;
