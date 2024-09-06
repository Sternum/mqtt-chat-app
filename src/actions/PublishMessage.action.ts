'use server'
export const publishMessageAction = async (topic: string, formData: FormData) => {

    const body = {
        topic: `chat/${topic}`,
        message: formData.get("message")
    }

    const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json"
        }
    }

    await fetch("http://api.sternum.pl/chat/send", options);

}