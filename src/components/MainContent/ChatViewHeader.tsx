import { HiMagnifyingGlass } from "react-icons/hi2";
import RoundButton from "../ui/RoundButton";
import UserAvatar from "../ui/UserAvatar";
import "./ChatViewHeader.css";
import { BsThreeDotsVertical } from "react-icons/bs";


interface ChatViewHeaderProps{
    imageURL?: string;
    firstName?: string
    lastName?: string;
    nickName: string;
}

export default function ChatViewHeader({imageURL, firstName, lastName, nickName}: ChatViewHeaderProps){

    return (
        <header className="chat-view-header">
            <div className="header-info">
                <div className="header-avatar">
                    <UserAvatar imageUrl={imageURL} userName={firstName ?? nickName} />
                </div>
                <div className="header-text">
                    <h2 className="header-title">{firstName + " " + lastName}</h2>
                    <span className="header-subtitle">last seen recently</span>
                </div>
            </div>
            <div className="header-actions">
                <RoundButton icon={<HiMagnifyingGlass />} onClick={()=> console.log("Search this chat opened")} />
                <RoundButton icon={<BsThreeDotsVertical  />} onClick={()=> console.log("More actions opened")} />
            </div>
        </header>
    );
}