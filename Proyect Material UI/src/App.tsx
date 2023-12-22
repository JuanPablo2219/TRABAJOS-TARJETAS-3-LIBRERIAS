import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css'


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 330, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.moravio.com/images/illustrations/technology_logo_bg.svg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" textAlign={'justify'} color={'pink'}>
            REACT GRAPHQL DEVELOP <br /> FOR ANY DEVELOPMENT
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'justify'}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}