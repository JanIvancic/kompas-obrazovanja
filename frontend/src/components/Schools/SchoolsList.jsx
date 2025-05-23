import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Stack,
  Card,
  Container,
  CardMedia
} from '@mui/material';
import { schoolsData } from './SchoolsData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import schoolImage0 from "../../assets/images/schools/school_0.jpg";
import schoolImage1 from "../../assets/images/schools/school_1.jpg";
import schoolImage2 from "../../assets/images/schools/school_2.jpg";
import schoolImage3 from "../../assets/images/schools/school_3.jpg";
import schoolImage4 from "../../assets/images/schools/school_4.jpg";
import defaultSchoolImage from "../../assets/images/schools/default_school.jpg";

const schoolImages = {
  0: schoolImage0,
  1: schoolImage1,
  2: schoolImage2,
  3: schoolImage3,
  4: schoolImage4,
};

const SchoolsList = () => {
  const navigate = useNavigate();

  const counties = [...new Set(schoolsData.map(school => school.county))];
  const cities = {};

  counties.forEach(county => {
    cities[county] = [...new Set(
      schoolsData
        .filter(school => school.county === county)
        .map(school => school.city)
    )];
  });

  const [selectedCounty, setSelectedCounty] = useState(counties[0]);
  const [selectedCity, setSelectedCity] = useState(cities[counties[0]][0]);

  const filteredSchools = schoolsData
    .filter(school => school.county === selectedCounty && school.city === selectedCity);

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

  const handleSchoolClick = (index) => {
    navigate(`/schools/detail/${index}`);

    window.scrollTo(0, 0);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Popis škola
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
          Pregledajte popis škola po županijama i gradovima
        </Typography>
      </Box>


      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 6 }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        justifyContent="center"
        sx={{ mb: 4, flexWrap: "wrap" }}
      >

        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={1}>
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


        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={1}>
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


      {filteredSchools.length > 0 ? (
        filteredSchools.map((school, index) => {
          const schoolIndex = schoolsData.findIndex(s =>
            s.name === school.name &&
            s.county === school.county &&
            s.city === school.city
          );

          return (
            <Card
              key={index}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: "10px",
                boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                textAlign: "left",
                maxWidth: 800,
                mx: 'auto'
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  cursor: 'pointer',
                  color: '#2fa4ff',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#1a93ee'
                  }
                }}
                onClick={() => handleSchoolClick(schoolIndex)}
              >
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
          );
        })
      ) : (
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Nema dostupnih škola za odabrani grad i županiju.
        </Typography>
      )}
    </Container>
  );
};

export default SchoolsList;
