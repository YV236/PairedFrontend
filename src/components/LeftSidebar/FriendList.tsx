import { useState } from "react";
import type { UserPreviewResponse } from "@/contracts/Response/ChatList/UserPreviewResponse";
import FriendListItem from "../ui/FriendListItem"
import "./FriendList.css";

interface FriendListProps {
    friends: UserPreviewResponse[];
    onFriendSelect?: (friendId: string) => void;
    onBack?: () => void;
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
        <div className="friend-list-container">
            <div className="friend-list-header-search">
                <button className="friend-list-back" onClick={onBack} title="Go back">
                    ←
                </button>
                <input 
                    type="text" 
                    placeholder="Search contacts..." 
                    className="friend-search-input" 
                />
            </div>

            <div className="friend-list-scroll">
                {friends.map((friend) => (
                    <FriendListItem 
                        key={friend.id}
                        friend={friend}
                        isActive={friend.id === activeFriendId}
                        onClick={() => handleSelectFriend(friend.id)}
                    />
                ))}
            </div>
        </div>
    );
}