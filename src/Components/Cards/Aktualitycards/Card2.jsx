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
                        Knovíz, Husova skála
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        Místo: Kladno
                        <br />
                        Typ: Skalní útvar
                        <br />
                       Husova skála se nachází nad obcí Knovíz nedaleko Slaného. Jedna se o dvě pískovcové skalní věže. Dá se na ně vystupit, ale pouze na vlastní nebezpečí. Místu se říká i Husova kazatelna. Dle legendy…
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><Link to="/aktuality">Více</Link></Button>
                </CardActions>
            </Card>
        </Box>
    );
}