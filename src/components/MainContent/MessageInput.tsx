import { BsEmojiGrin } from "react-icons/bs";
import RoundButton from "../ui/RoundButton";
import styles from "./MessageInput.module.css";
import { CiMicrophoneOn } from "react-icons/ci";
import { GrAttachment } from "react-icons/gr";

export default function MessageInput(){
    
    return(
        <div className={styles["chat-view-input-area"]}>
            <RoundButton icon={<GrAttachment />} onClick={()=>console.log("Attachment has been clicked")} />
            <div className={styles["input-container"]}>
                <input 
                    type="text" 
                    className={styles["message-input"]}
                    placeholder="Message" 
                />
                <RoundButton icon={<BsEmojiGrin />} onClick={()=> console.log("Emoji list is opened")} />
            </div>
            <RoundButton icon={<CiMicrophoneOn />} onClick={()=>console.log("Microphone is clicked")} />
        </div>
    );
}
