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
            <Card sx={{ minWidth: 275 }} className='aktcard'>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Rozhledna Kožová hora nedaleko Kladna
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        Místo: Kladno
                        <br />
                        Typ: Rozhledna
                        <br />
                        Kožová hora, které se také říká Kožova hora či Kožovka, je oblíbené výletní místo především lidí z Kladna a okolí. Nachází se totiž asi dva kilometry jižně od tohoto města v nadmořské výšce 456 metrů…
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><Link to="/aktuality">Zobrazit aktuality</Link></Button>
                </CardActions>
            </Card>
        </Box>
    );
}