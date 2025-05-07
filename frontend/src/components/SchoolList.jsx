import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Stack,
} from "@mui/material";
import { schoolsData } from "../SchoolsData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const counties = ["Varaždinska županija", "Međimurska županija"];
const cities = {
  "Varaždinska županija": ["Varaždin"],
  "Međimurska županija": ["Čakovec"],
};

export default function SchoolsList() {
  const [selectedCounty, setSelectedCounty] = useState("Varaždinska županija");
  const [selectedCity, setSelectedCity] = useState("Varaždin");

  const filteredSchools = schoolsData.filter(
    (school) =>
      school.county === selectedCounty && school.city === selectedCity
  );

  const selectStyle = {
    bgcolor: "#2fa4ff",
    color: "white",
    borderRadius: "30px",
    textTransform: "none",
    fontSize: 16,
    px: 3,
    py: 1.5,
    fontFamily: "Lato, sans-serif",
    fontWeight: 500,
    height: "42px",
    minWidth: "140px",
    border: "none",
    outline: "none",
    "& fieldset": {
      border: "none",
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
    "&:hover": {
      bgcolor: "#1a93ee",
    },
  };

  return (
    <Box sx={{ display: "flex", position: "relative", minHeight: "100vh" }}>
      {/* Lijeva reklama */}
      <Box
        sx={{
          width: 80,
          bgcolor: "#0b1b52",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />

      {/* Desna reklama */}
      <Box
        sx={{
          width: 80,
          bgcolor: "#0b1b52",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />

      {/* Glavni sadržaj */}
      <Box
        sx={{
          mt: 8,
          mb: 8,
          zIndex: 1,
          ml: "100px",
          mr: "300px",
          maxWidth: "640px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Filteri u jednom redu */}
        <Stack
          direction="row"
          spacing={6}
          alignItems="center"
          justifyContent="flex-start"
          sx={{ mb: 4, flexWrap: "nowrap" }}
        >
          {/* Županija */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                fontSize: 16,
                fontFamily: "Lato, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Odaberi županiju:
            </Typography>
            <FormControl>
              <Select
                value={selectedCounty}
                onChange={(e) => {
                  setSelectedCounty(e.target.value);
                  setSelectedCity(cities[e.target.value][0]);
                }}
                IconComponent={ExpandMoreIcon}
                sx={selectStyle}
              >
                {counties.map((county) => (
                  <MenuItem key={county} value={county}>
                    {county}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          {/* Grad */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                fontSize: 16,
                fontFamily: "Lato, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Odaberi grad:
            </Typography>
            <FormControl>
              <Select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                IconComponent={ExpandMoreIcon}
                sx={selectStyle}
              >
                {cities[selectedCounty].map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        {/* Kartice škola */}
        {filteredSchools.map((school, index) => (
          <Card
            key={index}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: "10px",
              boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
              textAlign: "left",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {school.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              {school.address}
            </Typography>
            <Typography variant="body2">tel: {school.tel}</Typography>
            <Typography variant="body2">fax: {school.fax}</Typography>
            <Typography variant="body2">e-mail: {school.email}</Typography>
            <Typography variant="body2">web: {school.web}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
