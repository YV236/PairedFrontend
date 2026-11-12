import MessageList from "./MessageList";
import { mockChats } from "@/contracts/Common/ChatMock"; 
import styles from "./ChatView.module.css";
import ChatViewHeader from "./ChatViewHeader";
import MessageInput from "./MessageInput";

interface ChatViewProps {
    chatId: string;
    onBack?: () => void;
}

export default function ChatView({ chatId, onBack }: ChatViewProps) {
    const chatData = mockChats.find(chat => chat.id === chatId);

    if (!chatData) {
        return (
            <div className={styles["chat-not-found-state"]}>
                <span>CHAT NOT FOUND</span>
                <h1>This conversation isn’t here.</h1>
                <p>Choose another chat from your messages.</p>
            </div>
        );
    }

    return (
        <>
            <ChatViewHeader 
                imageURL={chatData.otherUser.avatarUrl}
                firstName={chatData.otherUser.firstName}
                lastName={chatData.otherUser.lastName}
                nickName={chatData.otherUser.nickName} 
                onBack={onBack}
            />

            <div className={styles["chat-view-messages"]}>
                <MessageList messages={chatData.messages} />
            </div>

            <MessageInput />
        </>
    );
}
