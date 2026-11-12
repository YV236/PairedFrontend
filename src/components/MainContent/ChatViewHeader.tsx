import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLongArrowAltLeft } from "react-icons/fa";
import RoundButton from "../ui/RoundButton";
import UserAvatar from "../ui/UserAvatar";
import styles from "./ChatViewHeader.module.css";

interface ChatViewHeaderProps {
    imageURL?: string;
    firstName?: string
    lastName?: string;
    nickName: string;
    onBack?: () => void;
}

export default function ChatViewHeader({ imageURL, firstName, lastName, nickName, onBack }: ChatViewHeaderProps) {

    return (
        <header className={styles["chat-view-header"]}>
            <div className={styles["header-info"]}>
                {onBack && (
                    <div className={styles["mobile-back-btn"]}>
                        <RoundButton icon={<FaLongArrowAltLeft />} onClick={onBack} />
                    </div>
                )}
                
                <div className={styles["header-avatar"]}>
                    <UserAvatar imageUrl={imageURL} userName={firstName ?? nickName} />
                </div>
                <div className={styles["header-text"]}>
                    <h2 className={styles["header-title"]}>{firstName + " " + lastName}</h2>
                    <span className={styles["header-subtitle"]}>last seen recently</span>
                </div>
            </div>
            <div className={styles["header-actions"]}>
                <RoundButton icon={<HiMagnifyingGlass />} onClick={() => console.log("Search this chat opened")} />
                <RoundButton icon={<BsThreeDotsVertical />} onClick={() => console.log("More actions opened")} />
            </div>
        </header>
    );
}
