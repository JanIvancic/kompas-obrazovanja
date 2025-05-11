import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  Divider,
  Container,
  InputAdornment,
  inputBaseClasses
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [userData, setUserData] = React.useState({
    ime: "Tvoje Ime",
    prezime: "Tvoje Prezime",
    email: "tvojeime",
    telefon: "0912345678",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Spremljeni podaci:", userData);
  };

  const buttonStyle = {
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
  };

  const navigate = useNavigate();

  return (
    <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <Stack spacing={30} direction="row" justifyContent="center">
        {/* Lijevi sadržaj */}
         {/* Lijevi razmak za reklame */}
         <Box sx={{ width: "50px" }} />
        <Box sx={{ flex: 1, maxWidth: "calc(50% - 60px)", ml: "40px" }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>Osobni podaci</Typography>
          <Card sx={{ p: 3, mb: 12 }}>
            <Stack spacing={5}>
              <Stack direction="row" spacing={5} alignItems="center">
                <Avatar sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}>TI</Avatar>
                <Box>
                  <Typography variant="subtitle1">{userData.ime} {userData.prezime}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userData.email}@gmail.com
                  </Typography>
                </Box>
              </Stack>

              <TextField
                id="ime-field"
                label="Ime"
                name="ime"
                variant="standard"
                value={userData.ime}
                onChange={handleChange}
                slotProps={{
                  htmlInput: { sx: { textAlign: 'right' } },
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          alignSelf: 'flex-end',
                          margin: 0,
                          marginBottom: '5px',
                          opacity: 0,
                          pointerEvents: 'none',
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1,
                          },
                        }}
                      ></InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                id="prezime-field"
                label="Prezime"
                name="prezime"
                variant="standard"
                value={userData.prezime}
                onChange={handleChange}
                slotProps={{
                  htmlInput: { sx: { textAlign: 'right' } },
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          alignSelf: 'flex-end',
                          margin: 0,
                          marginBottom: '5px',
                          opacity: 0,
                          pointerEvents: 'none',
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1,
                          },
                        }}
                      ></InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                id="email-field"
                label="Email"
                name="email"
                variant="standard"
                value={userData.email}
                onChange={handleChange}
                slotProps={{
                  htmlInput: {
                    sx: { textAlign: 'right' },
                  },
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          alignSelf: 'flex-end',
                          margin: 0,
                          marginBottom: '5px',
                          opacity: 0,
                          pointerEvents: 'none',
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1,
                          },
                        }}
                      >
                        @gmail.com
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                id="telefon-field"
                label="Telefon"
                name="telefon"
                variant="standard"
                value={userData.telefon}
                onChange={handleChange}
                slotProps={{
                  htmlInput: {
                    sx: { textAlign: 'right' },
                  },
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          alignSelf: 'flex-end',
                          margin: 0,
                          marginBottom: '5px',
                          opacity: 0,
                          pointerEvents: 'none',
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1,
                          },
                        }}
                      >
                        (mob)
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Button variant="contained" onClick={handleSave} sx={buttonStyle}>
                Uredi postavke
              </Button>
            </Stack>
          </Card>
        </Box>

        {/* Desni sadržaj */}
        <Box sx={{ flex: 1, maxWidth: "calc(50% - 90px)", mr: "60px" }}>
          <Stack spacing={8}>
            {/* Premium korisnik */}
            <Box sx={{ width: "100%" }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>Premium korisnik</Typography>
              <Card sx={{ p: 3 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Trenutna pretplata: premium
                  <br />
                  Sljedeći datum plaćanja: 14.4.2025.
                </Typography>
                <Button variant="contained" sx={{ ...buttonStyle }}>
                  Otkaži pretplatu
                </Button>
              </Card>
            </Box>

            {/* Iskustvo */}
            <Box sx={{ width: "100%" }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>Iskustvo</Typography>
              <Card sx={{ p: 3 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Napiši svoje iskustvo o školi i smjeru kojeg si pohađao/la.
                </Typography>
                <Button 
                  variant="contained" 
                  sx={{ ...buttonStyle }}
                  onClick={() => navigate("/iskustvo-finalno")}
                >
                  Započni
                </Button>
              </Card>
            </Box>

            {/* Rezultati testova */}
            <Box sx={{ width: "100%" }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>Rezultati testova</Typography>
              <Card sx={{ p: 3 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Karijerni orijentacijski test
                </Typography>
                <Button variant="contained" sx={{ ...buttonStyle }}>
                  Rezultati
                </Button>
              </Card>
            </Box>
          </Stack>
        </Box>
         {/* Desni razmak za reklame */}
         <Box sx={{ width: "50px" }} />
      </Stack>
    </Container>
  );
}
