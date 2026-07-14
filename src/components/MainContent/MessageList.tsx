import type { MessageResponse } from "@/contracts/Response/Chat/MessageResponse";
import PinnedMessages from "./PinnedMessages";
import MessageBubble from "./MessageBubble";
import "./MessageList.css";

interface MessageListProps {
    messages: MessageResponse[];
}

export default function MessageList({ messages }: MessageListProps) {
    const CURRENT_USER_ID = "me_123";

    return (
        <div className="message-list-container">
            <PinnedMessages />

            <div className="messages-scroll-area">
                {messages.map((message) => {
                    const isOwnMessage = message.senderId === CURRENT_USER_ID;
                    
                    const time = new Date(message.sentAt).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                    });

                    return (
                        <MessageBubble 
                            key={message.id}
                            content={message.content}
                            time={time}
                            isOwnMessage={isOwnMessage}
                        />
                    );
                })}
            </div>
        </div>
    );
}