import { BsEmojiGrin } from "react-icons/bs";
import RoundButton from "../ui/RoundButton";
import "./MessageInput.css"
import { CiMicrophoneOn } from "react-icons/ci";
import { GrAttachment } from "react-icons/gr";

export default function MessageInput(){
    
    return(
        <div className="chat-view-input-area">
            <RoundButton icon={<GrAttachment />} onClick={()=>console.log("Attachment has been clicked")} />
            <div className="input-container">
                <input 
                    type="text" 
                    className="message-input" 
                    placeholder="Message" 
                />
                <RoundButton icon={<BsEmojiGrin />} onClick={()=> console.log("Emoji list is opened")} />
            </div>
            <RoundButton icon={<CiMicrophoneOn />} onClick={()=>console.log("Microphone is clicked")} />
        </div>
    );
}