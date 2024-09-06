import styles from "./page.module.css";
import RoomsComponent from "@/components/Rooms/Rooms.component";
import AddRoomComponent from "@/components/AddRoom/AddRoom.component";


export default function Home() {
  return (
    <main className={styles.main}>
        <AddRoomComponent />
        <RoomsComponent />
    </main>
  );
}
