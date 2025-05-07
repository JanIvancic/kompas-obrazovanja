import React, { useState, useEffect } from 'react';
import { getSchools } from '../../services/schoolService';
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  Paper
} from '@mui/material';

const SchoolsList = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getSchools();
        setSchools(data);
      } catch {
        setError('Došlo je do pogreške pri dohvaćanju škola.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <CircularProgress />;
  if (error)   return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Popis škola
      </Typography>
      <Paper elevation={3}>
        <List>
          {schools.length > 0 ? (
            schools.map(s => (
              <ListItem key={s.skolaId} divider alignItems="flex-start">
                <Box>
                  <Typography variant="h6">{s.naziv}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {s.grad} — {s.adresa}
                  </Typography>
                </Box>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <Typography>Nema dostupnih škola.</Typography>
            </ListItem>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default SchoolsList;
