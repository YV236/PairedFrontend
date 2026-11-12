import { GoPin } from "react-icons/go"
import RoundButton from "../ui/RoundButton"
import styles from "./PinnedMessages.module.css";

export default function PinnedMessages(){

    return(
         <div className={styles["pinned-message"]}>
                <div className={styles["pinned-content"]}>
                    <span className={styles["pinned-title"]}>Pinned message #11</span>
                    <span className={styles["pinned-text"]}>0021lubieplacki3700 пароль до...</span>
                </div>
                <RoundButton icon={<GoPin />} onClick = {() => console.log("Pinned messages opened")} />
            </div>
    )
}
