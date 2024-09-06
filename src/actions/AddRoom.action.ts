'use server'
import {json} from "stream/consumers";

export const AddRoomAction = async (formData: FormData) => {

    const body = {
        name: formData.get("name")
    }

    const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json"
        }
    }

    await fetch("http://api.sternum.pl/rooms", options);
}