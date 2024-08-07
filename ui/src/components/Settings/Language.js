import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Toolbar, AppBar, Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const languages = [
    { id: 0, label: 'Arabic', value: 'arabic' },
    { id: 1, label: 'Bengali', value: 'bengali' },
    { id: 2, label: 'Chinese (Simplified)', value: 'chinese-simplified' },
    { id: 3, label: 'English', value: 'english' },
    { id: 4, label: 'French', value: 'french' },
    { id: 5, label: 'Hindi', value: 'hindi' },
    { id: 6, label: 'Japanese', value: 'japanese' },
    { id: 7, label: 'Lahnda', value: 'lahnda' },
    { id: 8, label: 'Portuguese', value: 'portuguese' },
    { id: 9, label: 'Russian', value: 'russian' },
    { id: 10, label: 'Spanish', value: 'spanish' },
]

const Language = () => {
    const navigate = useNavigate();
    const [ activeLanguage, setActiveLanguage ] = useState('');

    const onClick = (e) => {
        e.preventDefault();
        const newActiveLanguage = e.target.value;
        console.log('setting activeLanguage...');
        console.debug(newActiveLanguage);
        setActiveLanguage(newActiveLanguage);
    };

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
                Language
            </Typography>
            </Toolbar>
        </AppBar>
        <Paper sx={{ m: 2, p: 2 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}><Typography variant='subtitle2'>Choose your preferred language</Typography></Grid>
                {languages.map((language) => (
                    <Grid key={language.id} item xs={12}>
                    <Button
                        variant={ activeLanguage === language.value ? 'contained' : 'outlined' }
                        fullWidth
                        sx={{ display: 'flex', justifyContent: 'space-between'}}
                        value={language.value}
                        onClick={onClick}
                    >
                        {language.label}
                    </Button>
                    </Grid>
                ))}
            </Grid>
        </Paper>
        </Box>
    );
}

export default Language;
