import MessageList from "./MessageList";
import { mockChats } from "@/contracts/Common/ChatMock"; 
import "./ChatView.css";
import ChatViewHeader from "./ChatViewHeader";
import MessageInput from "./MessageInput";

interface ChatViewProps {
    chatId: string;
}

export default function ChatView({ chatId }: ChatViewProps) {
    const chatData = mockChats.find(chat => chat.id === chatId);

    if (!chatData) {
        return (
            <>
                <div style={{ color: 'white', padding: '20px', textAlign: 'center' }}>
                    Виберіть чат для спілкування
                </div>
            </>
        );
    }

    return (
        <>
            <ChatViewHeader 
                imageURL={chatData.otherUser.avatarUrl}
                firstName = {chatData.otherUser.firstName}
                lastName = {chatData.otherUser.lastName}
                nickName = {chatData.otherUser.nickName} 
            />

            <div className="chat-view-messages">
                <MessageList messages={chatData.messages} />
            </div>

            <MessageInput />
        </>
    );
}