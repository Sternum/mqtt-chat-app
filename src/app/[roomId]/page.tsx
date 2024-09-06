import PublishMessageFormComponent from "@/components/PublishMessageForm/PublishMessageForm.component";
import MessagesComponent from "@/components/Messages/Messages.component";

const ChatRoom = ({params}: {params: {roomId: string}}) => {

    return(
        <div>
            <h1>Chat</h1>
            {params.roomId}
            <PublishMessageFormComponent topic={params.roomId} />
            <MessagesComponent topic={params.roomId} />
        </div>
    )
}

export default ChatRoom;