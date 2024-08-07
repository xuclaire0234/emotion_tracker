import * as React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ShareMenu from './ShareMenu';

/*
This code is modified from an example of using cards in MUI's card component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-card/#media
*/

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TipsCard({ emotion, content }) {
    const [expanded, setExpanded] = React.useState(false);
    console.debug('Rendering emotion TipsCard content:');
    console.debug(content);
    const learnMoreURL = `https://www.google.com/search?q=${emotion.label}`;
    
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <Card sx={{ maxWidth: 345 }}>
        {content.imageSrc !== '' && 
            <CardMedia
                component="img"
                height="512"
                sx={{ objectFit: 'contain' }}
                image={content.imageSrc}
                alt={content.imageAlt}
            />
        }
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: emotion.color }} aria-label="doctor-r">
                {emotion.label.charAt(0)}
            </Avatar>
        }
        title={emotion.label + "? Heres help."}
        subheader={content.published}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align='justify' style={{whiteSpace: 'pre-line'}}>
            {content.content}
        </Typography>
      </CardContent>
      <CardActions>
        <ShareMenu />
        <Button component={ReactRouterDomLink} to={learnMoreURL} size="small">Learn More</Button>
        { (content.hasComments && content.hasComments) &&
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
      </CardActions>
      { (content.hasComments && content.hasComments) &&
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </Collapse>
      }
    </Card>
  );
}
