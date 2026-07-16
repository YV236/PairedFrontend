import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLongArrowAltLeft } from "react-icons/fa";
import RoundButton from "../ui/RoundButton";
import UserAvatar from "../ui/UserAvatar";
import "./ChatViewHeader.css";

interface ChatViewHeaderProps {
    imageURL?: string;
    firstName?: string
    lastName?: string;
    nickName: string;
    onBack?: () => void;
}

export default function ChatViewHeader({ imageURL, firstName, lastName, nickName, onBack }: ChatViewHeaderProps) {

    return (
        <header className="chat-view-header">
            <div className="header-info">
                {onBack && (
                    <div className="mobile-back-btn">
                        <RoundButton icon={<FaLongArrowAltLeft />} onClick={onBack} />
                    </div>
                )}
                
                <div className="header-avatar">
                    <UserAvatar imageUrl={imageURL} userName={firstName ?? nickName} />
                </div>
                <div className="header-text">
                    <h2 className="header-title">{firstName + " " + lastName}</h2>
                    <span className="header-subtitle">last seen recently</span>
                </div>
            </div>
            <div className="header-actions">
                <RoundButton icon={<HiMagnifyingGlass />} onClick={() => console.log("Search this chat opened")} />
                <RoundButton icon={<BsThreeDotsVertical />} onClick={() => console.log("More actions opened")} />
            </div>
        </header>
    );
}