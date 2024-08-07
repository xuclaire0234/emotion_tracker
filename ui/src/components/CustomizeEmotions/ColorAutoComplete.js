import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircleIcon from '@mui/icons-material/Circle';

import { colorSwatch } from './consts';

const ColorAutoComplete = ({ onChange, emotionValue, currentColorValue }) => {
    const [ value, setValue ] = React.useState(() => {
        let x = '';
        colorSwatch.forEach(color => {
            if (color.colorData[500].toLowerCase() === currentColorValue.toLowerCase()) { 
                console.debug('Found emotion to color match ' + emotionValue + ' ' + color.label); 
                x = color;
            }
        });
        return x;
    })
    const [ inputValue, setInputValue ] = React.useState('');

  return (
    <Autocomplete
        id={`${emotionValue}-color-select`}
        options={colorSwatch}
        autoHighlight
        disableClearable
        value={value}
        onChange={(event, newValue) => {
            if (newValue) {
                setValue(newValue);
                onChange(emotionValue, { color: newValue.colorData[500] });
            };
        }}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
        <Box component="li" {...props}>
            <CircleIcon htmlColor={option.colorData[500]}/>
            {option.label}
        </Box>
        )}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
        <TextField
            {...params}
            label="Choose a color"
            inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
            }}
        />
        )}
    />
    )
}

export default ColorAutoComplete
