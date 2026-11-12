import type { ChatListItemResponse } from "@/contracts/Response/ChatList/ChatListItemResponse";
import styles from "./ChatListItem.module.css";
import UserAvatar from "@/components/ui/UserAvatar";

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
            className={`${styles["chat-list-item"]} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            <div className={styles["chat-avatar"]}>
                <UserAvatar imageUrl={chat.otherUser.avatarUrl} userName={chat.otherUser.firstName + " " + chat.otherUser.lastName} />
            </div>
            
            <div className={styles["chat-info"]}>
                <div className={styles["chat-header"]}>
                    <span className={styles["chat-name"]}>{chat.otherUser.firstName + " " + chat.otherUser.lastName}</span>
                    <span className={styles["chat-time"]}>{time}</span>
                </div>
                
                <div className={styles["chat-last-message"]}>
                    <span className={styles["message-text"]}>{chat.lastMessage.content}</span>
                    {chat.unreadCount > 0 && (
                        <span className={styles["unread-badge"]}>{chat.unreadCount}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
