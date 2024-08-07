import React from 'react'

import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Toolbar, AppBar, Button, FormControl, FormControlLabel, Switch } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const VoiceMode = () => {
    const navigate = useNavigate();

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
                Voice Mode
            </Typography>
            </Toolbar>
        </AppBar>
        <Paper sx={{ m: 2, p: 2 }}>
            <FormControl>
                <FormControlLabel control={<Switch />} label="Voice Mode" labelPlacement="start" />
            </FormControl>
        </Paper>
        </Box>
    );
}

export default VoiceMode
