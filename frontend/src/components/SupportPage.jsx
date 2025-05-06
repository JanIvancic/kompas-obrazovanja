import * as React from "react";
import {
  Container, Box, Stack, Card, TextField, Button, Typography,
  Avatar, InputAdornment
} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function SupportPage() {
  const [formData, setFormData] = React.useState({ ime: "", email: "", poruka: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = () => console.log("Support form data:", formData);

  const buttonStyle = {
    bgcolor: "#2fa4ff",
    borderRadius: "30px",
    textTransform: "none",
    fontSize: 16,
    px: 3,
    py: 1.5,
    fontFamily: "Lato, sans-serif",
    fontWeight: 500,
    "&:hover": { bgcolor: "#1a93ee" }
  };

  return (
    <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <Stack direction="row" spacing={30} justifyContent="center">
        <Box sx={{ width: 40 }} />

        <Box sx={{ flex: 1, maxWidth: "calc(50% - 60px)", ml: "40px" }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight:600 }}>
            Kontaktiraj podršku
          </Typography>
          <Card sx={{ p:3, mb:12 }}>
            <Stack spacing={5}>
              <TextField
                name="ime"
                label="Ime"
                variant="standard"
                fullWidth
                value={formData.ime}
                onChange={handleChange}
                InputProps={{ sx: { textAlign: 'right' } }}
              />
              <TextField
                name="email"
                label="E-mail"
                variant="standard"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  sx: { textAlign: 'right' },
                  endAdornment: <InputAdornment position="end">@kompas.hr</InputAdornment>
                }}
              />
              <TextField
                name="poruka"
                label="Poruka"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                value={formData.poruka}
                onChange={handleChange}
                InputProps={{ sx: { textAlign: 'left' } }}
              />
              <Button fullWidth variant="contained" sx={buttonStyle} onClick={handleSubmit}>
                Pošalji
              </Button>
            </Stack>
          </Card>
        </Box>

        <Box sx={{ flex:1, maxWidth:"calc(50% - 90px)", mr:"60px" }}>
          <Typography variant="h5" sx={{ mb:3, fontWeight:600 }}>
            Info
          </Typography>
          <Card sx={{ p:3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{bgcolor:'primary.main'}}>
                <MailOutlineIcon />
              </Avatar>
              <Typography>podrska@kompas.hr</Typography>
            </Stack>
          </Card>
        </Box>

        <Box sx={{ width:40 }} />
      </Stack>
    </Container>
  );
}