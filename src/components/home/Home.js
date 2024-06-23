import React, {useState, useEffect} from "react";
import Room from "../room/Room";
import {Container} from "@mui/material";
import {styled} from "@mui/material/styles";


const StyledContainer = styled(Container) ({
    justifyContent: "center",
    alignItems: "center"
});

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/rooms")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRoomList(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div> Error!!</div>;
    } else if (!isLoaded) {
        return <div> Loading... </div>;
    } else {
        return (
            <StyledContainer>
                {roomList.map(room => (
                    <Room id={room.id} roomNumber={room.roomNumber} capacity={room.capacity} text={room.text} price={room.price}></Room>
                ))}
            </StyledContainer>
        )
    }
}

export default Home;