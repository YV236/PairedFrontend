import type { MessageResponse } from "@/contracts/Response/Chat/MessageResponse";
import "./MessageList.css";

interface MessageListProps {
    messages: MessageResponse[];
}

export default function MessageList({ messages }: MessageListProps) {
    const CURRENT_USER_ID = "me_123";

    return (
        <div className="message-list-container">
            <div className="pinned-message">
                <div className="pinned-content">
                    <span className="pinned-title">Pinned message #11</span>
                    <span className="pinned-text">0021lubieplacki3700 пароль до...</span>
                </div>
                <button className="icon-btn">📌</button>
            </div>

            <div className="messages-scroll-area">
                
                {messages.map((message) => {
                    const isOwnMessage = message.senderId === CURRENT_USER_ID;
                    
                    const time = new Date(message.sentAt).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                    });

                    return (
                        <div 
                            key={message.id} 
                            className={`message ${isOwnMessage ? "own" : ""}`}
                        >
                            <div className="message-content">
                                {message.content}
                            </div>
                            <div className="message-meta">
                                {time} {isOwnMessage ? "✓" : ""}
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}