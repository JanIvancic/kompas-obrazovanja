    import React, { useState, useEffect } from 'react';
    import { Fab, Typography, Box } from '@mui/material';
    import ChatIcon from '@mui/icons-material/Chat';
    import { useNavigate, useLocation } from 'react-router-dom';

    const WELCOME_KEY = 'kompasWelcomeShown';

    export default function ChatWidget() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showWelcome, setShowWelcome] = useState(!localStorage.getItem(WELCOME_KEY));

    useEffect(() => {
        if (showWelcome) {
        const timer = setTimeout(() => {
            setShowWelcome(false);
            localStorage.setItem(WELCOME_KEY, 'true');
        }, 5000);

        return () => clearTimeout(timer);
        }
    }, [showWelcome]);

    if (location.pathname === '/chat') {
        return null;
    }

    return (
        <>
        {showWelcome && (
            <Box
            sx={{
                position: 'fixed',
                bottom: '150px',
                right: '40px',
                bgcolor: 'background.paper',
                boxShadow: 3,
                p: 2,
                borderRadius: 2,
                maxWidth: '250px',
                zIndex: 1400,
            }}
            >
            <Typography variant="body2">
                Bok! Klikni na ikonu za chat ako trebaš pomoć u pronalasku srednje škole.
            </Typography>
            </Box>
        )}
        
        <Fab
            color="primary"
            aria-label="chat"
            sx={{ position: 'fixed', bottom: '80px', right: '40px', zIndex: 1300 }}
            onClick={() => navigate('/chat')}
        >
            <ChatIcon />
        </Fab>
        </>
    );
    }
