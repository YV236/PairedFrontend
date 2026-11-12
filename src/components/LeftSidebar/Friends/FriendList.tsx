import { useState } from "react";
import type { UserPreviewResponse } from "@/contracts/Response/ChatList/UserPreviewResponse";
import FriendListItem from "./FriendListItem"
import BrandButton from "@/components/ui/BrandButton";
import RoundButton from "@/components/ui/RoundButton";
import { FaLongArrowAltLeft } from "react-icons/fa";
import styles from "./FriendList.module.css";

interface FriendListProps {
    friends: UserPreviewResponse[];
    onFriendSelect?: (friendId: string) => void;
    onBack: () => void;
}

export default function FriendList({ friends, onFriendSelect, onBack }: FriendListProps) {
    const [activeFriendId, setActiveFriendId] = useState<string | null>(null);

    const handleSelectFriend = (friendId: string) => {
        setActiveFriendId(friendId);
        if (onFriendSelect) {
            onFriendSelect(friendId);
        }
    };

    return (
        <div className={styles["friend-list-container"]}>
            <div className={styles["friend-list-brandbar"]}>
                <BrandButton size="compact" />
            </div>
            <div className={styles["friend-list-heading"]}>
                <h1>Friends</h1>
                <p>Good music is better shared.</p>
            </div>
            <div className={styles["friend-list-header-search"]}>
                <RoundButton 
                icon={<FaLongArrowAltLeft />} 
                onClick={onBack}  
                ariaLabel="Back to messages"
                />
                <input 
                    type="text" 
                    placeholder="Search contacts..." 
                    className={styles["friend-search-input"]}
                />
            </div>

            <div className={styles["friend-list-scroll"]}>
                {friends.length > 0 ? friends.map((friend) => (
                    <FriendListItem 
                        key={friend.id}
                        friend={friend}
                        isActive={friend.id === activeFriendId}
                        onClick={() => handleSelectFriend(friend.id)}
                    />
                )) : (
                    <div className={styles["friend-list-empty"]}>
                        <span>♫</span>
                        <strong>No friends here yet</strong>
                        <p>Your people will show up here when you connect.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
