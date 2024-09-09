'use client'
import {useEffect, useState} from "react";
import RoomComponent from "@/components/Room/Room.component";
import styles from "./Rooms.module.css";

const RoomsComponent = () => {
    const [rooms, setRooms] = useState<any[]>([]);

    useEffect(() => {
        getData();
        console.log(process.env.NEXT_PUBLIC_CHAT_URL);
        const source= new EventSource(`${process.env.NEXT_PUBLIC_CHAT_URL}/rooms/room-created`);
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_CHAT_URL}/rooms`, {method: 'GET'});
        setRooms(await response.json());
    }

    return (
        <div className={styles.body}>
            <h1>ROOMS</h1>
            <div className={styles.container}>
                {rooms.map(room => <RoomComponent key={room.id} name={room.name} roomId={room.id} />)}
            </div>
        </div>
    )
}

export default RoomsComponent;