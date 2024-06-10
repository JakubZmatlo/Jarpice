import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../../../App.css'




export default function BasicCard() {
  return (
    <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
      <Card sx={{ minWidth: 275 }} className='card2'>
        <CardContent>
          <Typography variant="h5" component="div">
          Pravěk a baroko Kladenska, Od tvrzí k baroknímu zámku
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <br />
          </Typography>
          <Typography variant="body2">
          Místo:		Huťská 1375, 27201 Kladno
            <br />
            Datum konání:	Stálá akce
            <br />
            Typ: Výstava
            <br />
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><li><Link to="/akce">Zobrazit všechny akce</Link></li></Button>
        </CardActions>
      </Card>
    </Box>

  );
}