'use client'
import {useEffect, useState} from "react";
import RoomComponent from "@/components/Room/Room.component";

const RoomsComponent = () => {
    const [rooms, setRooms] = useState<any[]>([]);

    useEffect(() => {
        getData();

        const source= new EventSource("http://api.sternum.pl/rooms/room-created");
        const updateRooms = (event: MessageEvent<any>) => {

            const data = JSON.parse(event.data);
            setRooms(data);
        }
        source.addEventListener('room-created', updateRooms);

        return () => {
            source.removeEventListener('room-created', updateRooms);
            source.close();
        }
    }, []);

    const getData = async () => {
        const response = await fetch("http://api.sternum.pl/rooms", {method: 'GET'});
        setRooms(await response.json());
    }

    return (
        <div>
            <h1>ROOMS</h1>
            {rooms.map(room => <RoomComponent key={room.id} name={room.name} roomId={room.id} />)}
        </div>
    )
}

export default RoomsComponent;