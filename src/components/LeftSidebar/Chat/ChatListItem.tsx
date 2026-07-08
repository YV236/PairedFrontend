import type { ChatListItemResponse } from "@/contracts/Response/ChatList/ChatListItemResponse";
import "./ChatListItem.css";

interface ChatListItemProps {
    chat: ChatListItemResponse;
    isActive: boolean;
    onClick: () => void;
}

export default function ChatListItem({ chat, isActive, onClick }: ChatListItemProps) {
    const time = new Date(chat.lastMessage.sentAt).toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    return (
        <div 
            className={`chat-list-item ${isActive ? "active" : ""}`} 
            onClick={onClick}
        >
            <div className="chat-avatar">
                <img src={chat.otherUser.avatarUrl} alt={chat.otherUser.name} />
            </div>
            
            <div className="chat-info">
                <div className="chat-header">
                    <span className="chat-name">{chat.otherUser.name}</span>
                    <span className="chat-time">{time}</span>
                </div>
                
                <div className="chat-last-message">
                    <span className="message-text">{chat.lastMessage.content}</span>
                    {chat.unreadCount > 0 && (
                        <span className="unread-badge">{chat.unreadCount}</span>
                    )}
                </div>
            </div>
        </div>
    );
}