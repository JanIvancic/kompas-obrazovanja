import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WELCOME_KEY = 'kompasWelcomeShown';

export default function ChatScreen() {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(
    !localStorage.getItem(WELCOME_KEY)
  );
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Bok! Kako ti mogu pomoći u pronalasku srednje škole?' }
  ]);
  const [input, setInput] = useState('');
  const [qCount, setQCount] = useState(0);

  // Uvodni tekst nestaje nakon 5s (prvi put)
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        localStorage.setItem(WELCOME_KEY, 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const qaMap = {
    'Bok, tražim srednju školu.': 'Naravno, tu sam da ti pomognem!',
    'Zanima me matematika.': 'Odlično! Ako te zanima matematika, preporučam ti prirodoslovno matematičku gimnaziju.',
    'Nisam siguran što želim upisati.': 'To je u redu. Tu sam da ti pomognem, reci mi što te zanima.',
    'Zanimaju me jezici, najviše engleski i francuski.': 'Odlično! Preporučam ti jezičnu gimnaziju.',
    'Trenutno idem u glazbenu školu i jako volim svirati gitaru.': 'To je super! Jako bi se dobro uklopio u srednju glazbenu školu.'
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { sender: 'user', text }]);
    const reply = qaMap[text] || 'Nažalost, ne razumijem.';
    setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    setInput('');
    setQCount(prev => prev + 1);
  };

  return (
    <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, md: 4 }, flex: 1 }}>
      <Paper elevation={3} sx={{ p: 3, mx: '40px', display: 'flex', flexDirection: 'column', height: '80vh' }}>
        {/* Uvodni tekst */}
        {showWelcome && (
          <Box sx={{ mb: 2 }}>
            <Typography>
              Bok! Ovdje možeš postaviti do 5 pitanja vezanih uz odabir srednje škole.
            </Typography>
          </Box>
        )}

        {/* Chat poruke */}
        <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
          {messages.map((m, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                justifyContent: m.sender === 'bot' ? 'flex-start' : 'flex-end',
                mb: 1
              }}
            >
              <Paper
                sx={{ p: 1, maxWidth: '70%', bgcolor: m.sender === 'bot' ? 'grey.100' : 'primary.light' }}
              >
                <Typography variant="body2">{m.text}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Unos poruke */}
        {qCount < 5 && (
          <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              placeholder="Upiši poruku..."
              value={input}
              onChange={e => setInput(e.target.value)}
              error={false}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
            >
              Pošalji
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}
