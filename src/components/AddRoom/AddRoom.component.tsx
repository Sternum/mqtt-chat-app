import styles from "./AddRoom.module.css"
import {AddRoomAction} from "@/actions/AddRoom.action";

const AddRoomComponent = () => {


    return(
        <div className={styles.container}>
            <h3>Create Room</h3>
            <form action={AddRoomAction}>
                <input type="text" name="name"/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    )
}

export default AddRoomComponent;