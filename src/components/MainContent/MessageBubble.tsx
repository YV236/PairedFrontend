import "./MessageBubble.css";

interface MessageBubbleProps {
    content: string;
    time: string;
    isOwnMessage: boolean;
}

export default function MessageBubble({ content, time, isOwnMessage }: MessageBubbleProps) {
    return (
        <div className={`message-wrapper ${isOwnMessage ? "own" : "other"}`}>
            
            <div className={`message-bubble ${isOwnMessage ? "own" : "other"}`}>
                <div className="message-content">
                    {content}
                </div>
                <div className="message-meta">
                    <span className="message-time">{time}</span>
                    {isOwnMessage && <span className="message-status">✓</span>}
                </div>
            </div>
            
        </div>
    );
}