import { GoPin } from "react-icons/go"
import RoundButton from "../ui/RoundButton"
import "./PinnedMessages.css"

export default function PinnedMessages(){

    return(
         <div className="pinned-message">
                <div className="pinned-content">
                    <span className="pinned-title">Pinned message #11</span>
                    <span className="pinned-text">0021lubieplacki3700 пароль до...</span>
                </div>
                <RoundButton icon={<GoPin />} onClick = {() => console.log("Pinned messages opened")} />
            </div>
    )
}