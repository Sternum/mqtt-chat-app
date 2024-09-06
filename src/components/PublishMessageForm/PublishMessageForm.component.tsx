'use client'
import {publishMessageAction} from "@/actions/PublishMessage.action";
import {useRef} from "react";

export interface PublishMessageFormComponentProps {
    topic: string
}

const PublishMessageFormComponent = ({topic}: PublishMessageFormComponentProps) => {
    const publishMessageWithTopic = publishMessageAction.bind(null, topic);

    const ref = useRef<HTMLFormElement>(null);

    return(
        <div>
            <form ref={ref} action={publishMessageWithTopic} on>
                <input autoComplete="off" type="text" name="message"/>
            </form>
        </div>
    )
}

export default PublishMessageFormComponent;