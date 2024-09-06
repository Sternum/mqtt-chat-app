import {redirect, useRouter} from "next/navigation";
import styles from "./Room.module.css";
export interface RoomComponentProps {
    name: string;
    roomId: string;
}
const RoomComponent = ({name, roomId}: RoomComponentProps) => {
    const router = useRouter();
    const enterRoom = () => {
        router.push(`/${roomId}`);
    }

    return(
        <div className={styles.container} onClick={enterRoom}>
            <p>{name}</p>
        </div>
    )
}

export default RoomComponent;