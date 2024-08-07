import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import EmotionThemeContext from '../../context/EmotionThemeContext';
import { fakeEmotionInfo } from './fakeEmotionInfo';
import TipsCard from './TipsCard';
import { getRandomNumber, getRandomNumberArray } from '../../utils/Utils';
import { AppBar, Toolbar } from '@mui/material';

/*
This code is modified from an example of using tabs in MUI's tab component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-tabs/#basic-tabs
*/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function EmotionTips() {
  const { storageEmotions } = useContext(EmotionThemeContext);
  const [value, setValue] = useState(0);
  const [activeEmotion, setActiveEmotion ] = useState(storageEmotions['anger']);

  const handleChange = (event, newValue) => {
    console.debug('changing active tip index ' + newValue);
    let emotion = storageEmotions[Object.keys(storageEmotions)[newValue]];
    console.debug('changing active tip emotion...');
    console.debug(emotion);
    setActiveEmotion(emotion);
    setValue(newValue);
  };

  const renderTipsCards = () => {
    let tipsCardsRender = [];
    let fakeEmotionInfoList = fakeEmotionInfo[activeEmotion.value];
    let numTipsToRender = getRandomNumber(1, fakeEmotionInfoList.length);
    let numTipsToRenderList = getRandomNumberArray(numTipsToRender, fakeEmotionInfoList.length);
    numTipsToRenderList.forEach((item) => {
        tipsCardsRender.push(
          <TipsCard key={item * 2} emotion={activeEmotion} content={fakeEmotionInfo[activeEmotion.value][item]}></TipsCard>
        );
        tipsCardsRender.push(<br key={item * 2 + 1} />);
    });
    return(<>{tipsCardsRender}</>);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position='static'>
        <Toolbar>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          textColor='inherit'
          TabIndicatorProps={{ sx: { backgroundColor: 'white', color: 'white' }}}
        >
          {Object.keys(storageEmotions).map((emotion) => (
            <Tab key={storageEmotions[emotion].id} label={storageEmotions[emotion].icon + ' ' + storageEmotions[emotion].label}>
            </Tab>
          ))}
        </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={value}>
        {renderTipsCards()}
      </TabPanel>
    </Box>
  );
}
