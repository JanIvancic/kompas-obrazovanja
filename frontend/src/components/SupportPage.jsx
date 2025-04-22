import * as React from "react";
import { Container, Box, Stack, Card, TextField, Button, Typography, Avatar } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function SupportPage() {
  const [formData, setFormData] = React.useState({ ime: "", email: "", poruka: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = () => console.log("Support form data:", formData);

  return (
    <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <Stack direction="row" spacing={30} justifyContent="center">
        <Box sx={{ width: 40 }} />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Kontaktiraj podršku</Typography>
          <Card sx={{ p: 3, mb: 12 }}>
            <Stack spacing={5}>
              <TextField name="ime" label="Ime" variant="standard" fullWidth value={formData.ime} onChange={handleChange}/>
              <TextField name="email" label="E-mail" variant="standard" fullWidth value={formData.email} onChange={handleChange}/>
              <TextField name="poruka" label="Poruka" variant="standard" multiline rows={4} fullWidth value={formData.poruka} onChange={handleChange}/>
              <Button fullWidth variant="contained" onClick={handleSubmit}>Pošalji</Button>
            </Stack>
          </Card>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Info</Typography>
          <Card sx={{ p: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar><MailOutlineIcon/></Avatar>
              <Typography>podrska@kompas.hr</Typography>
            </Stack>
          </Card>
        </Box>
        <Box sx={{ width: 40 }} />
      </Stack>
    </Container>
  );
}