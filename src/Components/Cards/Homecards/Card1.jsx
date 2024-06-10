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
    <Card sx={{ minWidth: 275 }} className='card1'>
      <CardContent>
        <Typography variant="h5" component="div">
          OČKOVÁNÍ PSŮ 21.5.2024
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <br />
        </Typography>
        <Typography variant="body2">
          Datum konání: 21.5.2024
          <br />
          DNE  21.5.2024 V 16:00 PROBĚHNE V JARPICÍCH OČKOVÁNÍ PSŮ
          <br />
          Smíšená vakcína 250,-Kč
          <br />
          Vzteklina 150 ,- Kč
          <br />
          Sraz u starého úřadu č.p. 5
          <br />
          Nezapomenout průkazy
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to="/aktuality">Zobrazit aktuality</Link></Button>
      </CardActions>
    </Card>
    </Box>
  );
}