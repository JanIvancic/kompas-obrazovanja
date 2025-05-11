import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IskustvoFinalno = () => {
  const navigate = useNavigate();
  
  // Data for dropdowns
  const [selectedZupanija, setSelectedZupanija] = useState("");
  const [selectedGrad, setSelectedGrad] = useState("");
  const [selectedSkola, setSelectedSkola] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [experience, setExperience] = useState("");

  // Years for dropdown
  const years = Array.from(
    { length: 30 },
    (_, i) => new Date().getFullYear() - i,
  );

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSave = () => {
    // Here you would typically save the data to your backend
    console.log("Saving experience:", {
      zupanija: selectedZupanija,
      grad: selectedGrad,
      skola: selectedSkola,
      program: selectedProgram,
      startYear,
      endYear,
      experience
    });
    
    // Navigate to profile page after saving
    navigate("/profile");
  };

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f8f9fa",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Back button */}
      <IconButton
        sx={{ position: "absolute", top: 30, left: 115 }}
        aria-label="back"
        onClick={handleBack}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Main content */}
      <Container maxWidth="lg" sx={{ pt: 15, pb: 10 }}>
        <Stack spacing={3} alignItems="center">
          {/* Header */}
          <Typography
            variant="h2"
            fontFamily="Montserrat-Bold, Helvetica"
            fontWeight="bold"
            color="#292929"
            textAlign="center"
          >
            Iskustvo
          </Typography>

          <Typography
            variant="h5"
            fontFamily="Lato-Medium, Helvetica"
            fontWeight="500"
            color="#292929"
            textAlign="center"
            letterSpacing="1px"
            sx={{ mb: 4 }}
          >
            Napiši svoje iskustvo o svojoj srednjoj školi i smjeru koji si
            pohađao.
          </Typography>

          {/* Form fields in new layout */}
          <Box sx={{ width: "100%", maxWidth: 800, mx: "auto" }}>
            {/* First row: Županija and Grad */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontFamily="Montserrat-Bold, Helvetica"
                  fontWeight="bold"
                  color="#292929"
                  gutterBottom
                >
                  Odaberi županiju:
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    bgcolor: "#2fa4ff",
                    borderRadius: "30px",
                    textTransform: "none",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontFamily: "Lato-Medium, Helvetica",
                    width: "100%",
                    "&:hover": {
                      bgcolor: "#1a93ee",
                    },
                  }}
                >
                  Odaberi
                </Button>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontFamily="Montserrat-Bold, Helvetica"
                  fontWeight="bold"
                  color="#292929"
                  gutterBottom
                >
                  Odaberi grad:
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    bgcolor: "#2fa4ff",
                    borderRadius: "30px",
                    textTransform: "none",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontFamily: "Lato-Medium, Helvetica",
                    width: "100%",
                    "&:hover": {
                      bgcolor: "#1a93ee",
                    },
                  }}
                >
                  Odaberi
                </Button>
              </Grid>
            </Grid>

            {/* Second row: Škola and Program */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontFamily="Montserrat-Bold, Helvetica"
                  fontWeight="bold"
                  color="#292929"
                  gutterBottom
                >
                  Odaberi školu:
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    bgcolor: "#2fa4ff",
                    borderRadius: "30px",
                    textTransform: "none",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontFamily: "Lato-Medium, Helvetica",
                    width: "100%",
                    "&:hover": {
                      bgcolor: "#1a93ee",
                    },
                  }}
                >
                  Odaberi
                </Button>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontFamily="Montserrat-Bold, Helvetica"
                  fontWeight="bold"
                  color="#292929"
                  gutterBottom
                >
                  Odaberi program:
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    bgcolor: "#2fa4ff",
                    borderRadius: "30px",
                    textTransform: "none",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontFamily: "Lato-Medium, Helvetica",
                    width: "100%",
                    "&:hover": {
                      bgcolor: "#1a93ee",
                    },
                  }}
                >
                  Odaberi
                </Button>
              </Grid>
            </Grid>

            {/* Academic year section */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                fontFamily="Montserrat-Bold, Helvetica"
                fontWeight="bold"
                color="#292929"
                gutterBottom
              >
                Akademska godina:
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                      variant="subtitle1"
                      fontFamily="Lato-Medium, Helvetica"
                      fontWeight="500"
                      color="#292929"
                    >
                      Početak:
                    </Typography>
                    <Select
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                      displayEmpty
                      sx={{
                        width: 130,
                        height: 29,
                        borderRadius: 28,
                        bgcolor: "#f8f9fa",
                        border: "0.2px solid #292929",
                        boxShadow: "0px 0px 10px #2929291a",
                        "& .MuiSelect-select": {
                          py: 0.5,
                          fontFamily: "Lato-Light, Helvetica",
                          fontWeight: 300,
                          fontSize: "1rem",
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      <MenuItem value="" disabled>
                        <Typography
                          fontFamily="Lato-Light, Helvetica"
                          fontWeight="300"
                          fontSize="1rem"
                        >
                          Godina
                        </Typography>
                      </MenuItem>
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                      variant="subtitle1"
                      fontFamily="Lato-Medium, Helvetica"
                      fontWeight="500"
                      color="#292929"
                    >
                      Kraj:
                    </Typography>
                    <Select
                      value={endYear}
                      onChange={(e) => setEndYear(e.target.value)}
                      displayEmpty
                      sx={{
                        width: 130,
                        height: 29,
                        borderRadius: 28,
                        bgcolor: "#f8f9fa",
                        border: "0.2px solid #292929",
                        boxShadow: "0px 0px 10px #2929291a",
                        "& .MuiSelect-select": {
                          py: 0.5,
                          fontFamily: "Lato-Light, Helvetica",
                          fontWeight: 300,
                          fontSize: "1rem",
                        },
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      <MenuItem value="" disabled>
                        <Typography
                          fontFamily="Lato-Light, Helvetica"
                          fontWeight="300"
                          fontSize="1rem"
                        >
                          Godina
                        </Typography>
                      </MenuItem>
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            {/* Experience section */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                fontFamily="Montserrat-Bold, Helvetica"
                fontWeight="bold"
                color="#292929"
                gutterBottom
              >
                Iskustvo
              </Typography>
              
              {/* Experience text area */}
              <TextField
                multiline
                rows={6}
                placeholder="Zabilježi svoje iskustvo..."
                fullWidth
                variant="outlined"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "22px",
                    border: "1px solid rgba(14, 24, 95, 0.2)",
                    boxShadow: "0px 0px 10px rgba(14, 24, 95, 0.1)",
                    bgcolor: "#f8f9fa",
                    "& fieldset": {
                      borderColor: "rgba(14, 24, 95, 0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Lato-Medium, Helvetica",
                    fontWeight: 500,
                    fontSize: "1.25rem",
                    color: "rgba(41, 41, 41, 0.5)",
                  },
                }}
              />
            </Box>
            {/* Save button */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button
                variant="contained"
                onClick={handleSave}
                sx={{
                  bgcolor: "#2fa4ff",
                  borderRadius: "30px",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.25rem",
                  fontFamily: "Lato-Medium, Helvetica",
                  "&:hover": {
                    bgcolor: "#1a93ee",
                  },
                }}
              >
                Spremi
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default IskustvoFinalno;



