import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  IconButton,
  Paper,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { schoolsData } from "./SchoolsData";

// Import school images
import schoolImage0 from "../../assets/images/schools/school_0.jpg";
import schoolImage1 from "../../assets/images/schools/school_1.jpg";
import schoolImage2 from "../../assets/images/schools/school_2.jpg";
import schoolImage3 from "../../assets/images/schools/school_3.jpg";
import schoolImage4 from "../../assets/images/schools/school_4.jpg";
import defaultSchoolImage from "../../assets/images/schools/default_school.jpg";

// Map of school images by index
const schoolImages = {
  0: schoolImage0,
  1: schoolImage1,
  2: schoolImage2,
  3: schoolImage3,
  4: schoolImage4,
};

// These would be separate components in your actual implementation
const HeaderSection = () => <Box sx={{ height: 0, bgcolor: "#fff" }}></Box>;
const NavigationSection = () => <Box sx={{ height: 100, bgcolor: "#f8f9fa", my: 4 }}></Box>;
const ProgramsSection = () => (
  <Box sx={{ mt: 4, ml: 16 }}>
    <Typography
      sx={{
        fontFamily: "Lato-Regular, Helvetica",
        fontSize: 24,
        color: "#292929",
        letterSpacing: "0.5px",
        lineHeight: "36px",
        maxWidth: 973,
      }}
    >
      Prva gimnazija Varaždin je jedna od najstarijih srednjih škola u Hrvatskoj, osnovana 1636. godine.
      Škola ima bogatu tradiciju i izvrsne rezultate u obrazovanju učenika.
    </Typography>
  </Box>
);
const StudentExperiencesSection = () => (
  <Box sx={{ mt: 4, ml: 16 }}>
    <Typography
      sx={{
        fontFamily: "Lato-Regular, Helvetica",
        fontSize: 24,
        color: "#292929",
        letterSpacing: "0.5px",
        lineHeight: "36px",
        maxWidth: 973,
      }}
    >
      • Opća gimnazija
      • Prirodoslovno-matematička gimnazija
      • Jezična gimnazija
      • Opća gimnazija uz skupinu predmeta na stranom jeziku
    </Typography>
  </Box>
);
const SchoolDescriptionSection = () => (
  <Box sx={{ mt: 6, ml: 16 }}>
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Montserrat-Bold, Helvetica",
        fontWeight: "bold",
        fontSize: 32,
        color: "#292929",
      }}
    >
      O školi
    </Typography>
    <Typography
      sx={{
        mt: 2,
        fontFamily: "Lato-Regular, Helvetica",
        fontSize: 24,
        color: "#292929",
        letterSpacing: "0.5px",
        lineHeight: "36px",
        maxWidth: 973,
      }}
    >
      Prva gimnazija Varaždin je jedna od najstarijih srednjih škola u Hrvatskoj, osnovana 1636. godine.
      Škola ima bogatu tradiciju i izvrsne rezultate u obrazovanju učenika. Naši učenici redovito
      postižu izvrsne rezultate na državnim i međunarodnim natjecanjima te na državnoj maturi.
    </Typography>
  </Box>
);
const TestimonialsSection = () => (
  <Box sx={{ mt: 6, ml: 16 }}>
    <Typography
      sx={{
        mt: 2,
        fontFamily: "Lato-Regular, Helvetica",
        fontSize: 24,
        color: "#292929",
        letterSpacing: "0.5px",
        lineHeight: "36px",
        maxWidth: 973,
      }}
    >
      "Prva gimnazija mi je pružila izvrsno obrazovanje i pripremila me za fakultet. Profesori su stručni i
      posvećeni, a atmosfera u školi je poticajna za učenje i osobni razvoj."
      <br /><br />
      - Ana, bivša učenica
    </Typography>
  </Box>
);

// Sample testimonials data
const testimonials = [
  {
    name: "Marko Petrović",
    program: "Prirodoslovna gimnazija",
    years: "2015. - 2019.",
    text: "Prva gimnazija Varaždin pružila mi je vrhunsko obrazovanje i odličnu pripremu za studij medicine. Zahvaljući podršci profesora i sudjelovanju na državnim natjecanjima iz kemije i biologije, stekao sam znanja koja su mi olakšala studiranje. Školski dani ostali su mi u sjećanju kao razdoblje intenzivnog učenja, ali i nezaboravnih prijateljstava.",
    type: "program"
  },
  {
    name: "Ana Kovačić",
    program: "Prirodoslovna gimnazija",
    years: "2010. - 2014.",
    text: "Oduvijek sam voljela strane jezike, a Prva gimnazija mi je omogućila da ih usavršim kroz sjajan nastavni program i razne projekte u suradnji s europskim školama. Položila sam njemačku i austrijsku jezičnu diplomu, što mi je pomoglo u daljnjem školovanju u inozemstvu. Škola mi je otvorila vrata prema studiju lingvistike i karijeri prevoditeljice.",
    type: "program"
  },
  {
    name: "Luka Jurinić",
    program: "IB Diploma Program",
    years: "2016. - 2020.",
    text: "IB program u Prvoj gimnaziji Varaždin bio je izazovan, ali iznimno koristan. Kroz sam kritičko razmišljanje, akademske vještine i stekao široko obrazovanje koje mi je omogućilo upis na prestižni fakultet u Velikoj Britaniji. Posebno bih pohvalio interdisciplinarni pristup i podršku profesora koji su nas uvijek poticali da težimo izvrsnosti.",
    type: "program"
  },
  {
    name: "Ivana Horvat",
    program: "Jezična gimnazija",
    years: "2017. - 2021.",
    text: "Jezična gimnazija bila je savršen izbor za mene. Naučila sam tečno govoriti tri strana jezika i stekla duboko razumijevanje različitih kultura. Profesori su bili iznimno stručni i posvećeni, a međunarodni projekti omogućili su mi putovanja i stvaranje prijateljstava diljem Europe. Danas studiram međunarodne odnose i svakodnevno koristim znanja stečena u gimnaziji.",
    type: "program"
  },
  {
    name: "Tomislav Novak",
    program: "Opća gimnazija",
    years: "2014. - 2018.",
    text: "Opća gimnazija pružila mi je široko obrazovanje i pomogla mi da otkrijem svoje interese. Posebno sam zahvalan na izvannastavnim aktivnostima poput debatnog kluba i školskog zbora koji su razvili moje komunikacijske vještine. Danas studiram pravo i često se prisjećam vrijednih lekcija naučenih u gimnazijskim danima.",
    type: "news"
  },
  {
    name: "Petra Knežević",
    program: "Prirodoslovno-matematička gimnazija",
    years: "2018. - 2022.",
    text: "Nedavno sam maturirala i mogu reći da me PMG odlično pripremila za studij računarstva. Zahvaljući dodatnoj nastavi iz matematike i informatike te sudjelovanju na natjecanjima, stekla sam znanja koja su mi dala prednost na fakultetu. Profesori su uvijek bili dostupni za dodatna objašnjenja i poticali nas na samostalno istraživanje.",
    type: "news"
  }
];

// Program options for dropdown
const programOptions = [
  "Opća gimnazija",
  "Prirodoslovno-matematička gimnazija",
  "Jezična gimnazija",
  "IB Diploma Program"
];

// Year options for dropdown
const yearOptions = [
  "2022. - 2023.",
  "2020. - 2021.",
  "2018. - 2019.",
  "2016. - 2017.",
  "Starije"
];

const SchoolDetailPage = () => {
  const { schoolId } = useParams();
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialFilter, setTestimonialFilter] = useState("all");
  
  // Menu states
  const [programMenuAnchor, setProgramMenuAnchor] = useState(null);
  const [newsMenuAnchor, setNewsMenuAnchor] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the school by ID
  const school = schoolsData.find((s) => s.id === parseInt(schoolId)) || 
                 schoolsData.find((_, index) => index === parseInt(schoolId));

  // If school not found, redirect to schools list
  React.useEffect(() => {
    if (!school) {
      navigate("/schools");
    }
  }, [school, navigate]);

  if (!school) return null;

  // Get the appropriate school image or use default
  const schoolIndex = schoolsData.findIndex((s) => s === school);
  const schoolImage = schoolImages[schoolIndex] || defaultSchoolImage;

  // School contact data
  const contactData = [
    { label: "Telefon:", value: school.tel },
    { label: "Email:", value: school.email, isEmail: true },
    { label: "Fax:", value: school.fax },
  ];

  // Filter testimonials based on selected filter
  let filteredTestimonials = testimonials;
  if (testimonialFilter === "program" && selectedProgram) {
    filteredTestimonials = testimonials.filter(t => t.program === selectedProgram);
  } else if (testimonialFilter === "news" && selectedYear) {
    filteredTestimonials = testimonials.filter(t => t.years.includes(selectedYear.split(" - ")[0]));
  } else if (testimonialFilter === "program") {
    filteredTestimonials = testimonials.filter(t => t.type === "program");
  } else if (testimonialFilter === "news") {
    filteredTestimonials = testimonials.filter(t => t.type === "news");
  }

  const handleBack = () => {
    navigate("/schools");
  };

  const handleProgramClick = () => {
    navigate(`/schools/program/${schoolId}`);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  // Program menu handlers
  const handleProgramMenuOpen = (event) => {
    setProgramMenuAnchor(event.currentTarget);
    setTestimonialFilter("program");
  };

  const handleProgramMenuClose = () => {
    setProgramMenuAnchor(null);
  };

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setProgramMenuAnchor(null);
    setCurrentTestimonial(0);
  };

  // News menu handlers
  const handleNewsMenuOpen = (event) => {
    setNewsMenuAnchor(event.currentTarget);
    setTestimonialFilter("news");
  };

  const handleNewsMenuClose = () => {
    setNewsMenuAnchor(null);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setNewsMenuAnchor(null);
    setCurrentTestimonial(0);
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%", overflowX: "hidden" }}>
      <Box sx={{ width: "100%", maxWidth: 1920 }}>
        <Box>
          <HeaderSection />

          <Box sx={{ bgcolor: "#f8f9fa", pt: "96px", position: "relative" }}>
            <Box sx={{ p: 2, ml: { xs: 2, sm: 6, md: 12 } }}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ minWidth: 30, height: 30, p: 0 }}
                onClick={handleBack}
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                ml: { xs: 2, sm: 6, md: 16 },
                mt: 4,
                fontFamily: "Montserrat-Bold, Helvetica",
                fontWeight: "bold",
                fontSize: { xs: 32, sm: 40, md: 50 },
                color: "#292929",
              }}
            >
              {school.name}
            </Typography>

            <Grid container sx={{ mt: 4, ml: { xs: 2, sm: 6, md: 16 }, width: { xs: "calc(100% - 16px)", md: "calc(100% - 32px)" } }}>
              <Grid item xs={12} md={7}>
                <Box
                  component="img"
                  src={schoolImage}
                  alt={school.name}
                  sx={{
                    width: "100%",
                    maxWidth: 1115,
                    height: "auto",
                    maxHeight: 624,
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                {/* Empty div removed */}
              </Grid>
            </Grid>

            <Typography
              variant="h2"
              sx={{
                ml: { xs: 2, sm: 6, md: 16 },
                mt: 8,
                fontFamily: "Montserrat-Bold, Helvetica",
                fontWeight: "bold",
                fontSize: { xs: 24, md: 32 },
                color: "#292929",
              }}
            >
              Opis škole
            </Typography>

            {/* Update all ml values to be responsive */}
            <Box sx={{ mt: 4, ml: { xs: 2, sm: 6, md: 16 } }}>
              <Typography
                sx={{
                  fontFamily: "Lato-Regular, Helvetica",
                  fontSize: { xs: 18, md: 24 },
                  color: "#292929",
                  letterSpacing: "0.5px",
                  lineHeight: "36px",
                  maxWidth: 973,
                }}
              >
                Prva gimnazija Varaždin je jedna od najstarijih srednjih škola u Hrvatskoj, osnovana 1636. godine.
                Škola ima bogatu tradiciju i izvrsne rezultate u obrazovanju učenika.
              </Typography>
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ ml: { xs: 2, sm: 6, md: 16 }, mt: 4 }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato-SemiBold, Helvetica",
                  fontWeight: 600,
                  fontSize: { xs: 18, md: 24 },
                  color: "#292929",
                }}
              >
                Web stranica:
              </Typography>
              <Link
                href={`https://${school.web}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontFamily: "Lato-Regular, Helvetica",
                  fontSize: { xs: 18, md: 24 },
                  color: "#292929",
                  textDecoration: "underline",
                }}
              >
                {school.web}
              </Link>
            </Stack>

            <Box sx={{ mt: 4, ml: { xs: 2, sm: 6, md: 16 } }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Montserrat-Bold, Helvetica",
                    fontWeight: "bold",
                    fontSize: { xs: 24, md: 32 },
                    color: "#292929",
                  }}
                >
                  Nastavni program
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "56px",
                    borderColor: "#292929",
                    color: "#292929",
                    fontFamily: "Lato-Medium, Helvetica",
                    fontSize: 14,
                    py: 0.5,
                    px: 2,
                    boxShadow: "0px 0px 10px #2929291a",
                  }}
                  onClick={handleProgramClick}
                >
                  Saznaj više
                </Button>
              </Stack>

              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Lato-Regular, Helvetica",
                  fontSize: { xs: 18, md: 24 },
                  color: "#292929",
                  letterSpacing: "0.5px",
                  lineHeight: "36px",
                  maxWidth: 973,
                }}
              >
                Škola izvodi nastavne planove i programe u četverogodišnjem
                trajanju za stjecanje srednjeg općeg i stručnog obrazovanja kroz
                sljedeće smjerove:
              </Typography>
            </Box>

            <Box sx={{ mt: 4, ml: { xs: 2, sm: 6, md: 16 } }}>
              <Typography
                sx={{
                  fontFamily: "Lato-Regular, Helvetica",
                  fontSize: { xs: 18, md: 24 },
                  color: "#292929",
                  letterSpacing: "0.5px",
                  lineHeight: "36px",
                  maxWidth: 973,
                }}
              >
                • Opća gimnazija
                • Prirodoslovno-matematička gimnazija
                • Jezična gimnazija
                • Opća gimnazija uz skupinu predmeta na stranom jeziku
              </Typography>
            </Box>

            <Box sx={{ mt: 6, ml: { xs: 2, sm: 6, md: 16 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Montserrat-Bold, Helvetica",
                  fontWeight: "bold",
                  fontSize: { xs: 24, md: 32 },
                  color: "#292929",
                  mb: 3
                }}
              >
                Iskustva prijašnjih učenika
              </Typography>
            </Box>

            {/* Filter buttons with dropdowns */}
            <Box sx={{ mt: 2, ml: { xs: 2, sm: 6, md: 16 }, display: 'flex', gap: 2, mb: 4 }}>
              <Button
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  bgcolor: testimonialFilter === "program" ? "#1a93ee" : "#2fa4ff",
                  borderRadius: "30px",
                  px: 3,
                  py: 1.5,
                  fontFamily: "Lato-Medium, Helvetica",
                  fontSize: { xs: 16, md: 18 },
                  color: "#fff",
                  textTransform: "none",
                }}
                onClick={handleProgramMenuOpen}
              >
                {selectedProgram || "Program"}
              </Button>
              <Menu
                anchorEl={programMenuAnchor}
                open={Boolean(programMenuAnchor)}
                onClose={handleProgramMenuClose}
              >
                {programOptions.map((program) => (
                  <MenuItem key={program} onClick={() => handleProgramSelect(program)}>
                    {program}
                  </MenuItem>
                ))}
              </Menu>
              
              <Button
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  bgcolor: testimonialFilter === "news" ? "#1a93ee" : "#2fa4ff",
                  borderRadius: "30px",
                  px: 3,
                  py: 1.5,
                  fontFamily: "Lato-Medium, Helvetica",
                  fontSize: { xs: 16, md: 18 },
                  color: "#fff",
                  textTransform: "none",
                }}
                onClick={handleNewsMenuOpen}
              >
                {selectedYear || "Najnovije"}
              </Button>
              <Menu
                anchorEl={newsMenuAnchor}
                open={Boolean(newsMenuAnchor)}
                onClose={handleNewsMenuClose}
              >
                {yearOptions.map((year) => (
                  <MenuItem key={year} onClick={() => handleYearSelect(year)}>
                    {year}
                  </MenuItem>
                ))}
              </Menu>
              
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  borderColor: testimonialFilter === "all" ? "#1a93ee" : "#2fa4ff",
                  color: "#292929",
                  px: 3,
                  py: 1.5,
                  fontFamily: "Lato-Medium, Helvetica",
                  fontSize: { xs: 16, md: 18 },
                  textTransform: "none",
                }}
                onClick={() => {
                  setTestimonialFilter("all");
                  setSelectedProgram(null);
                  setSelectedYear(null);
                  setCurrentTestimonial(0);
                }}
              >
                Svi
              </Button>
            </Box>

            {/* Testimonials carousel - styled like the image */}
            {filteredTestimonials.length > 0 ? (
              <Box sx={{ 
                ml: { xs: 2, sm: 6, md: 16 }, 
                mr: { xs: 2, sm: 6, md: 16 },
                position: 'relative',
                pb: 8
              }}>
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 3,
                  position: 'relative',
                  width: '100%',
                  overflow: 'hidden'
                }}>
                  {/* First testimonial */}
                  <Paper 
                    elevation={1}
                    sx={{ 
                      p: 4, 
                      borderRadius: 2,
                      bgcolor: '#e6f4fc',
                      flex: 1,
                      maxWidth: { xs: '100%', md: '30%' },
                      minHeight: '350px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato-Bold, Helvetica",
                        fontSize: { xs: 18, md: 20 },
                        color: "#292929",
                        fontWeight: "bold",
                        mb: 2
                      }}
                    >
                      {filteredTestimonials[currentTestimonial % filteredTestimonials.length].name}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Lato-Regular, Helvetica",
                          fontSize: { xs: 14, md: 16 },
                          color: "#292929",
                          mb: 0.5
                        }}
                      >
                        <strong>Smjer:</strong> {filteredTestimonials[currentTestimonial % filteredTestimonials.length].program}
                      </Typography>
                      
                      <Typography
                        sx={{
                          fontFamily: "Lato-Regular, Helvetica",
                          fontSize: { xs: 14, md: 16 },
                          color: "#292929",
                          mb: 2
                        }}
                      >
                        <strong>Akademska godina:</strong> {filteredTestimonials[currentTestimonial % filteredTestimonials.length].years}
                      </Typography>
                    </Box>
                    
                    <Typography
                      sx={{
                        fontFamily: "Lato-Regular, Helvetica",
                        fontSize: { xs: 14, md: 16 },
                        color: "#292929",
                        lineHeight: 1.6,
                        flex: 1
                      }}
                    >
                      <strong>Osvrt:</strong> {filteredTestimonials[currentTestimonial % filteredTestimonials.length].text}
                    </Typography>
                  </Paper>
                  
                  {/* Second testimonial */}
                  <Paper 
                    elevation={1}
                    sx={{ 
                      p: 4, 
                      borderRadius: 2,
                      bgcolor: '#e6f4fc',
                      flex: 1,
                      maxWidth: { xs: '100%', md: '30%' },
                      minHeight: '350px',
                      display: { xs: 'none', md: 'flex' },
                      flexDirection: 'column'
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato-Bold, Helvetica",
                        fontSize: { xs: 18, md: 20 },
                        color: "#292929",
                        fontWeight: "bold",
                        mb: 2
                      }}
                    >
                      {filteredTestimonials[(currentTestimonial + 1) % filteredTestimonials.length].name}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Lato-Regular, Helvetica",
                          fontSize: { xs: 14, md: 16 },
                          color: "#292929",
                          mb: 0.5
                        }}
                      >
                        <strong>Smjer:</strong> {filteredTestimonials[(currentTestimonial + 1) % filteredTestimonials.length].program}
                      </Typography>
                      
                      <Typography
                        sx={{
                          fontFamily: "Lato-Regular, Helvetica",
                          fontSize: { xs: 14, md: 16 },
                          color: "#292929",
                          mb: 2
                        }}
                      >
                        <strong>Akademska godina:</strong> {filteredTestimonials[(currentTestimonial + 1) % filteredTestimonials.length].years}
                      </Typography>
                    </Box>
                    
                    <Typography
                      sx={{
                        fontFamily: "Lato-Regular, Helvetica",
                        fontSize: { xs: 14, md: 16 },
                        color: "#292929",
                        lineHeight: 1.6,
                        flex: 1
                      }}
                    >
                      <strong>Osvrt:</strong> {filteredTestimonials[(currentTestimonial + 1) % filteredTestimonials.length].text}
                    </Typography>
                  </Paper>
                  
                  {/* Third testimonial */}
                  <Paper 
                    elevation={1}
                    sx={{ 
                      p: 4, 
                      borderRadius: 2,
                      bgcolor: '#e6f4fc',
                      flex: 1,
                      maxWidth: { xs: '100%', md: '30%' },
                      minHeight: '350px',
                      display: { xs: 'none', md: 'flex' },
                      flexDirection: 'column'
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato-Bold, Helvetica",
                        fontSize: { xs: 18, md: 20 },
                        color: "#292929",
                        fontWeight: "bold",
                        mb: 2
                      }}
                    >
                      {filteredTestimonials[(currentTestimonial + 2) % filteredTestimonials.length].name}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Lato-Regular, Helvetica",
                          fontSize: { xs: 14, md: 16 },
                          color: "#292929",
                          mb: 0.5
                        }}
                      >
                        <strong>Smjer:</strong> {filteredTestimonials[(currentTestimonial + 2) % filteredTestimonials.length].program}
                      </Typography>
                      
                      <Typography
                        sx={{
                          fontFamily: "Lato-Regular, Helvetica",
                          fontSize: { xs: 14, md: 16 },
                          color: "#292929",
                          mb: 2
                        }}
                      >
                        <strong>Akademska godina:</strong> {filteredTestimonials[(currentTestimonial + 2) % filteredTestimonials.length].years}
                      </Typography>
                    </Box>
                    
                    <Typography
                      sx={{
                        fontFamily: "Lato-Regular, Helvetica",
                        fontSize: { xs: 14, md: 16 },
                        color: "#292929",
                        lineHeight: 1.6,
                        flex: 1
                      }}
                    >
                      <strong>Osvrt:</strong> {filteredTestimonials[(currentTestimonial + 2) % filteredTestimonials.length].text}
                    </Typography>
                  </Paper>
                </Box>
                
                {/* Navigation arrows */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  position: 'absolute',
                  width: '100%',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  px: 2,
                  zIndex: 1
                }}>
                  <IconButton 
                    onClick={handlePrevTestimonial}
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.8)', 
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } 
                    }}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>
                  <IconButton 
                    onClick={handleNextTestimonial}
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.8)', 
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } 
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
                
                {/* Pagination dots */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mt: 2,
                  position: 'absolute',
                  bottom: 10,
                  left: 0,
                  right: 0
                }}>
                  {filteredTestimonials.map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        mx: 0.5,
                        bgcolor: index === currentTestimonial % filteredTestimonials.length ? '#2fa4ff' : '#e0e0e0',
                        cursor: 'pointer'
                      }}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </Box>
              </Box>
            ) : (
              <Box sx={{ mt: 4, ml: { xs: 2, sm: 6, md: 16 } }}>
                <Typography
                  sx={{
                    fontFamily: "Lato-Regular, Helvetica",
                    fontSize: { xs: 18, md: 24 },
                    color: "#292929",
                  }}
                >
                  Nema dostupnih iskustava za odabrani filter.
                </Typography>
              </Box>
            )}

            <Box sx={{ mt: 6, ml: { xs: 2, sm: 6, md: 16 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Montserrat-Bold, Helvetica",
                  fontWeight: "bold",
                  fontSize: { xs: 24, md: 32 },
                  color: "#292929",
                }}
              >
                O školi
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Lato-Regular, Helvetica",
                  fontSize: { xs: 18, md: 24 },
                  color: "#292929",
                  letterSpacing: "0.5px",
                  lineHeight: "36px",
                  maxWidth: 973,
                }}
              >
                Prva gimnazija Varaždin je jedna od najstarijih srednjih škola u Hrvatskoj, osnovana 1636. godine.
                Škola ima bogatu tradiciju i izvrsne rezultate u obrazovanju učenika. Naši učenici redovito
                postižu izvrsne rezultate na državnim i međunarodnim natjecanjima te na državnoj maturi.
              </Typography>
            </Box>

            <Grid container spacing={4} sx={{ mt: 4, ml: { xs: 0, sm: 2, md: 14 }, mr: { xs: 0, sm: 2 }, px: { xs: 2, sm: 0 } }}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Montserrat-Bold, Helvetica",
                    fontWeight: "bold",
                    fontSize: { xs: 24, md: 32 },
                    color: "#292929",
                    mb: 2,
                  }}
                >
                  Lokacija
                </Typography>
                <Box
                  component="img"
                  src="/image.png"
                  alt="Map"
                  sx={{
                    width: "100%",
                    maxWidth: 1105,
                    height: "auto",
                    maxHeight: 377,
                  }}
                />
                <Typography
                  sx={{
                    mt: 2,
                    fontFamily: "Lato-Medium, Helvetica",
                    fontSize: { xs: 18, md: 24 },
                    color: "#292929",
                  }}
                >
                  <Box component="span" sx={{ fontWeight: "medium" }}>
                    Adresa:{" "}
                  </Box>
                  {school.address}, {school.city}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Montserrat-Bold, Helvetica",
                    fontWeight: "bold",
                    fontSize: { xs: 24, md: 32 },
                    color: "#292929",
                    mb: 2,
                  }}
                >
                  Kontakt podaci
                </Typography>
                <Stack spacing={2}>
                  {contactData.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontFamily: "Lato-Medium, Helvetica",
                        fontSize: { xs: 16, md: 20 },
                        color: "#292929",
                        lineHeight: "30px",
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: "medium" }}>
                        {item.label}
                      </Box>{" "}
                      {item.isEmail ? (
                        <Link
                          href={`mailto:${item.value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            fontFamily: "Lato-Regular, Helvetica",
                            textDecoration: "underline",
                          }}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <Box
                          component="span"
                          sx={{
                            fontFamily: "Lato-Regular, Helvetica",
                          }}
                        >
                          {item.value}
                        </Box>
                      )}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>

            <NavigationSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SchoolDetailPage;



