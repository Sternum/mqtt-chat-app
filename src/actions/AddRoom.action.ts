'use server'
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

    await fetch(`${process.env.NEXT_PUBLIC_CHAT_URL}/rooms`, options);
}