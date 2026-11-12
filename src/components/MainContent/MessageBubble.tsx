import styles from "./MessageBubble.module.css";

interface MessageBubbleProps {
    content: string;
    time: string;
    isOwnMessage: boolean;
}

export default function MessageBubble({ content, time, isOwnMessage }: MessageBubbleProps) {
    return (
        <div className={`${styles["message-wrapper"]} ${isOwnMessage ? styles.own : styles.other}`}>
            
            <div className={`${styles["message-bubble"]} ${isOwnMessage ? styles.own : styles.other}`}>
                <div className={styles["message-content"]}>
                    {content}
                </div>
                <div className={styles["message-meta"]}>
                    <span className={styles["message-time"]}>{time}</span>
                    {isOwnMessage && <span className={styles["message-status"]}>✓</span>}
                </div>
            </div>
            
        </div>
    );
}
