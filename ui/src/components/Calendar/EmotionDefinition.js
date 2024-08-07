import React from 'react';
import { useParams,useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmotionThemeContext from '../../context/EmotionThemeContext';
import { Container, Box, Typography, Paper } from '@mui/material';

const EmotionDefinition = () => {
  const { emotionKey } = useParams();
  const { storageEmotions } = React.useContext(EmotionThemeContext);
  
  // implement backbutton direct usr to calendar
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/calendar');
  };

  const emotion = storageEmotions[emotionKey];

  if (!emotion) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Emotion not found
          </Typography>
          <Typography variant="body1">
            The specified emotion was not found in the list of emotions.
          </Typography>
        </Box>
      </Container>
    );
  }

  const symptoms = [
    'Rapid heartbeat',
    'Shallow breathing',
    'Sweating',
    'Feeling restless',
    'Difficulty concentrating',
  ];

  return (
    <Container maxWidth="sm">
     <button style={{ marginTop: 13, background: 'transparent', border: '1px solid', borderRadius: 5, padding: 0, borderColor: 'white' }} onClick={handleBack}>
      <ArrowBackIcon fontSize='large'/>
      </button>
      <Box sx={{ textAlign: 'center',  mb: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {emotionKey.toUpperCase()}
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: emotion.color + '33', textAlign: 'center', mb: 2 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Icon: {emotion.icon}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Description: <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla sapien eget pharetra dictum. Curabitur sit amet mi finibus, convallis nisl a, placerat felis. Proin ut sem pretium velit scelerisque mollis. Vestibulum dictum mattis sodales. Maecenas tristique et metus dapibus maximus. 
        </Typography>
      </Paper>
      <Typography variant="h6" component="h2" gutterBottom sx={{ textAlign: 'center', mt: 4 }}>
        Key Signs & Symptoms
      </Typography>
      {symptoms.map((symptom, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <Paper elevation={3} sx={{ display: "inherit", p: 4, backgroundColor: emotion.color + '33', textAlign: 'center', maxWidth: '60%' }}>
            <Typography variant="body1">
              {symptom}
            </Typography>
          </Paper>
        </Box>
      ))}

    </Container>
  );
};

export default EmotionDefinition;