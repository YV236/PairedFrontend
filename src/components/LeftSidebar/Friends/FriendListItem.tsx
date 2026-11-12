import type { UserPreviewResponse } from "@/contracts/Response/ChatList/UserPreviewResponse";
import styles from "./FriendListItem.module.css";
import UserAvatar from "@/components/ui/UserAvatar";

interface FriendListItemProps {
    friend: UserPreviewResponse;
    isActive: boolean;
    onClick: () => void;
}

export default function FriendListItem({ friend, isActive, onClick }: FriendListItemProps) {
    return (
        <div 
            className={`${styles["friend-list-item"]} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            <div className={styles["friend-avatar"]}>
                <UserAvatar imageUrl={friend.avatarUrl} userName={friend.nickName} />
                
            </div>
            
            <div className={styles["friend-info"]}>
                <div className={styles["friend-name"]}>{friend.firstName + " " + friend.lastName}</div>
            </div>
        </div>
    );
}
