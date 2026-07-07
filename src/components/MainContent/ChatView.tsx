import MessageList from "./MessageList";
import { mockChats } from "@/contracts/Common/ChatMock"; 
import "./ChatView.css";

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
            <header className="chat-view-header">
                <div className="header-info">
                    <div className="header-avatar">
                        <span>{chatData.otherUser.name.charAt(0)}</span>
                    </div>
                    <div className="header-text">
                        <h2 className="header-title">{chatData.otherUser.name}</h2>
                        <span className="header-subtitle">last seen recently</span>
                    </div>
                </div>
                <div className="header-actions">
                    <button className="icon-btn">🔍</button>
                    <button className="icon-btn">⋮</button>
                </div>
            </header>

            <div className="chat-view-messages">
                <MessageList messages={chatData.messages} />
            </div>

            <div className="chat-view-input-area">
                <button className="icon-btn">📎</button>
                <div className="input-container">
                    <input 
                        type="text" 
                        className="message-input" 
                        placeholder="Message" 
                    />
                    <button className="icon-btn emoji-btn">😊</button>
                </div>
                <button className="icon-btn mic-btn">🎤</button>
            </div>
        </>
    );
}