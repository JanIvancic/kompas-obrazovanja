import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Ime i prezime je obavezno.";
    if (!/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = "Unesite ispravnu email adresu.";
    if (formValues.password.length < 6)
      newErrors.password = "Lozinka mora imati barem 6 znakova.";
    if (formValues.password !== formValues.confirmPassword)
      newErrors.confirmPassword = "Lozinke se ne podudaraju.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Podaci za registraciju:", formValues);
    alert("Registracija uspješna (mock)!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Registracija
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            label="Ime i prezime"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Lozinka"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Potvrdite lozinku"
            name="confirmPassword"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="subscribe"
                checked={formValues.subscribe}
                onChange={handleChange}
              />
            }
            label="Želim primati obavijesti putem emaila."
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Registriraj se
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Već imate račun?{" "}
          <Typography href="/signin"
          component={Link}
          to="/login" 
          >
            Prijavite se
          </Typography>
        </Typography>
      </Paper>
    </Container>
  );
}
