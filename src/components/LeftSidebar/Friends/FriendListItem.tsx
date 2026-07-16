import type { UserPreviewResponse } from "@/contracts/Response/ChatList/UserPreviewResponse";
import "./FriendListItem.css";
import UserAvatar from "@/components/ui/UserAvatar";

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
                <UserAvatar imageUrl={friend.avatarUrl} userName={friend.nickName} />
                
            </div>
            
            <div className="friend-info">
                <div className="friend-name">{friend.firstName + " " + friend.lastName}</div>
            </div>
        </div>
    );
}