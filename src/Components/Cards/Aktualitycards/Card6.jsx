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
                        Lidice - Pomník dětským obětem války
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        Místo: Kladno
                        <br />
                        Typ: Socha
                        <br />
                     Při návštěvě Pietního místa v Lidicích mne uchvátil a dojal Památník dětským obětem války. Památník vytvořila akademická sochařka Marie Uchytilová-Kučová společně se svým manželem Jiřím Václavem…

Více
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><Link to="/aktuality">Více</Link></Button>
                </CardActions>
            </Card>
        </Box>
    );
}