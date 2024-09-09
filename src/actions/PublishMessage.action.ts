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

    await fetch(`${process.env.NEXT_PUBLIC_CHAT_URL}/chat/send`, options);

}