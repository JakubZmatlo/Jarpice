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
                        Památný dub u Svárovské hájovny
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        Místo: Kladno
                        <br />
                        Typ: Památný strom
                        <br />
                     Tento památný strom roste na břehu Rymáňského potoka kousek nad jeho ústím do Loděnice u Podkozí. Za památný strom byl tento dub letní vyhlášen spolu s dalšími stromy kladenského okresu 15. 1. 1985…
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><Link to="/aktuality">Více</Link></Button>
                </CardActions>
            </Card>
        </Box>
    );
}