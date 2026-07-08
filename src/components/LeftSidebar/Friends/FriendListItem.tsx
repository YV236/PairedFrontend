import type { UserPreviewResponse } from "@/contracts/Response/ChatList/UserPreviewResponse";
import "./FriendListItem.css";

interface FriendListItemProps {
    friend: UserPreviewResponse;
    isActive: boolean;
    onClick: () => void;
}

export default function FriendListItem({ friend, isActive, onClick }: FriendListItemProps) {
    return (
        <div 
            className={`friend-list-item ${isActive ? "active" : ""}`} 
            onClick={onClick}
        >
            <div className="friend-avatar">
                {friend.avatarUrl ? (
                    <img src={friend.avatarUrl} alt={friend.name} />
                ) : (
                    <span>{friend.name.charAt(0)}</span>
                )}
            </div>
            
            <div className="friend-info">
                <div className="friend-name">{friend.name}</div>
            </div>
        </div>
    );
}