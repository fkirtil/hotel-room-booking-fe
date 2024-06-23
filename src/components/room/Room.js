import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useLocation} from "react-router-dom";

function Room(props) {
    const {id, roomNumber, capacity, text, price} = props;
    const location = useLocation();
    const { customerId } = location.state || {};

    console.log('Customer ID in Reservation:', customerId);

    const saveReservation = () => {
        fetch("http://localhost:8080/api/reservations",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                room : {
                    id: id
                },
                customer : {
                    id : customerId
                }
            }),
        })
            .then((res) => res.json())
            .catch((err) => console.log("error"))
    }

    const handleReservation = () => {
        saveReservation();
    }

    return (
        <div>
            <div className="roomContainer">
                <br/>
                <Card sx={{ maxWidth: 600 }}>
                    <CardMedia
                        sx={{ height: 150 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title={capacity}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                            {capacity} Kişilik Oda
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {text} - Gecesi {price} tl
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleReservation}>Reservation</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Room;