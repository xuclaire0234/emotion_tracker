import React, { useEffect, useState, useContext } from 'react'
import { Area, CartesianGrid, ComposedChart, Line, ReferenceArea, XAxis, YAxis } from 'recharts';
import { FormControl, FormHelperText, MenuItem, Select, InputLabel, Typography, Paper, Grid } from '@mui/material';

import EmotionThemeContext from '../../context/EmotionThemeContext';
import { fakeGraphData, fakeGraphDataLocation } from './fakeGraphData';
import MultipleSelectChip from './EmotionListSelect';

const BasicGraph = ({ currentDate }) => {
  const { storageEmotions } = useContext(EmotionThemeContext);
  const graphWidth = window.innerWidth - 20;
  const graphHeight = window.innerHeight / 2;
  console.debug(`graphWidth: ${graphWidth} graphHeigh: ${graphHeight}`);

  const [ activeEmotion, setActiveEmotion ] = useState('tired');
  const [ activeEmotionList, setActiveEmotionList ] = useState(['tired', 'anger'])
  const [ activeLocation, setActiveLocation ] = useState('');

  const handleActiveLocationChange = (e) => {
    let newActiveLocation = e.target.value;
    setActiveLocation(newActiveLocation);
  }

  const handleActiveEmotionChange = (e) => {
    let newActiveEmotion = e.target.value;
    // Rearrange the graph to have the active emotion at the beginning of the list such that
    // the graph will render the non-active storageEmotions ontop
    let newEmotionList = [...activeEmotionList];
    newEmotionList.splice(activeEmotionList.findIndex((element) => element === newActiveEmotion), 1)
    newEmotionList.unshift(newActiveEmotion);
    
    setActiveEmotion(newActiveEmotion);
    setActiveEmotionList(newEmotionList);
  }

  useEffect(() => {
    // Choose two random storageEmotions to graph based on any given day choosen
    const currentISODate = currentDate.split('T')[0];
    // let randomNumberArray = getRandomNumberArray(2, Object.keys(storageEmotions).length - 1);
    let randomNumberArray = [ 
      currentISODate[currentISODate.length - 1 ] % Object.keys(storageEmotions).length , 
      currentISODate[currentISODate.length - 2 ] % Object.keys(storageEmotions).length
    ]
    let newEmotionList = [];
    for (let i = 0; i < randomNumberArray.length; i++) {
      let randomEmotion = Object.keys(storageEmotions)[randomNumberArray[i]];
      newEmotionList.push(randomEmotion);
    }
    let uniqNewEmotionList = [...new Set(newEmotionList)];
    setActiveEmotionList(uniqNewEmotionList);
    setActiveEmotion(uniqNewEmotionList[0]);
  }, [currentDate, storageEmotions]);
  
  const renderEmotionGraphData = (emotion, idx) => {
    if (emotion === activeEmotion) {
      return (
        <Area 
          key={idx}
          type='monotone' 
          dataKey={storageEmotions[emotion].value}
          dot={null}
          fill='url(#colorGradient)'
          stroke={storageEmotions[emotion].color} 
          strokeWidth={2} strokeDasharray="5 5"
        />
      )
    } else {
      return (
        <Line 
          key={idx}
          type='monotone' 
          dataKey={storageEmotions[emotion].value}
          dot={null} 
          stroke={storageEmotions[emotion].color} 
          strokeWidth={2}
        />
      )
    }
  }
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper sx={{ m: 2, paddingTop: 1}}>
          <ComposedChart 
            width={graphWidth} 
            height={graphHeight} 
            data={fakeGraphData} 
            margin={{ top: 0, right: 50, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={storageEmotions[activeEmotion].color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={storageEmotions[activeEmotion].color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            {activeEmotionList.map((emotion, idx) => (renderEmotionGraphData(emotion, idx)))}
            <CartesianGrid horizontal={false} stroke='#000' strokeDasharray="1 20"/>
            <XAxis dataKey='name'/>
            <YAxis label={{ value: 'Emotion Intensity', angle: -90, position: 'insideLeft' }} />
            {activeLocation && 
              <ReferenceArea x1={fakeGraphDataLocation[activeLocation].x1} x2={fakeGraphDataLocation[activeLocation].x2}/>
            }
          </ComposedChart>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ marginLeft: 2, marginRight: 2 }}>
          <Typography variant='h5' color='primary' sx={{ m: 1 }}>Graph Controls</Typography>
          <FormControl sx={{ m: 1, marginBottom: 4, width:'60%', maxWidth:'60%' }}>
            <InputLabel id="active-emotion-select-helper-label">Highlight Emotion</InputLabel>
            <Select
              labelId="active-emotion-select-helper-label"
              id="active-emotion-select-helper"
              value={activeEmotion}
              label="Active Emotion"
              onChange={handleActiveEmotionChange}
            >
              {activeEmotionList.map((emotion) => (
                <MenuItem key={storageEmotions[emotion].id} value={storageEmotions[emotion].value}>{storageEmotions[emotion].label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <MultipleSelectChip activeEmotionList={activeEmotionList} setActiveEmotionList={setActiveEmotionList} />
          <FormControl sx={{ m: 1, marginBottom: 4, maxWidth:'60%' }}>
            <InputLabel id="active-location-select-helper-label">Highlight Location</InputLabel>
            <Select
              labelId="active-location-select-helper-label"
              id="active-location-select-helper"
              value={activeLocation}
              label="Active Location"
              onChange={handleActiveLocationChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              {Object.keys(fakeGraphDataLocation).map((location, idx) => (
                <MenuItem key={idx} value={location}>{fakeGraphDataLocation[location].label}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Select the location to highlight</FormHelperText>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default BasicGraph
