import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../../../App.css'




export default function BasicCard() {
    return (
        <Box sx={{ minWidth: 275 }} display="flex" justifyContent="center" alignItems="center">
            <Card sx={{ minWidth: 275 }} className='akcecard1'>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Historie města Velvary a jeho okolí
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <br />
                    </Typography>
                    <Typography variant="body2">
                        Místo:	Pražská 109, 27324 Velvary
                        <br />
                        Datum konání:	Stálá akce
                        <br />
                        Typ: Výstava
                        <br />
                        <br />
                        <Link to="">VÍCE</Link>
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Box>

    );
}