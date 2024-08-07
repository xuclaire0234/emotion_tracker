import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Toolbar, AppBar, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import EmotionThemeContext from '../../context/EmotionThemeContext';
import ColorAutoComplete from './ColorAutoComplete';
// import { emotions } from '../consts';

const CustomizeEmotions = () => {
    const navigate = useNavigate();
    const { resetEmotions, updateEmotions, storageEmotions } = useContext(EmotionThemeContext);

    const handleUpdate = (emotion, value) => {
        console.log(`Changing storageEmotion ${emotion} with data...`);
        console.debug(value);
        let newEmotionData = {...storageEmotions[emotion], ...value};
        let newStorageEmotions = {...storageEmotions, [emotion]: newEmotionData};
        updateEmotions(newStorageEmotions);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Button 
            variant='contained' 
            onClick={() => navigate('/settings')}
            startIcon={<NavigateBeforeIcon />}
            >
            </Button>
            <Typography variant="h6" component="div">
                Emotion Pallete
            </Typography>
            </Toolbar>
        </AppBar>
        <Paper sx={{ m: 2, p: 2 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}><Typography variant='h5' color='primary'>Emotion Color Swatch</Typography></Grid>
                <Grid item xs={12}><Typography variant='subtitle2'>Choose your emotion colors</Typography></Grid>
                {Object.keys(storageEmotions).map((emotion) => (
                    <React.Fragment key={storageEmotions[emotion].id}>
                    <Grid item xs={12}>
                        <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center'}}>
                            {storageEmotions[emotion].label} {storageEmotions[emotion].icon} <CircleIcon htmlColor={storageEmotions[emotion].color}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{marginBottom: 4}}>
                        <ColorAutoComplete 
                            onChange={handleUpdate} 
                            emotionValue={storageEmotions[emotion].value} 
                            currentColorValue={storageEmotions[emotion].color}
                        />
                    </Grid>
                    </React.Fragment>
                ))}
                <Grid item xs={12}>
                    <Button variant='contained' color='error' onClick={resetEmotions}>Reset Pallete To Defaults</Button>
                </Grid>
            </Grid>
        </Paper>
        </Box>
    )
}

export default CustomizeEmotions
