'use client'
import {useCallback, useEffect, useState} from "react";
import {io} from "socket.io-client";
import {Socket} from "net";

interface MessagesComponentProps {
    topic: string
}

const MessagesComponent = ({topic}: MessagesComponentProps) => {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const socket = io(`${process.env.NEXT_PUBLIC_CHAT_URL}`, {
            query: {room: topic},
            transports: ['websocket']
        });

        socket.on("message", msg => setMessages(prev => [...prev, msg.message]));

        return () => {
            socket.close();
        }
    }, []);

    return(
        <div>
            {messages.map(message => <p key={message}>{message}</p>)}
        </div>
    )
}

export default MessagesComponent;