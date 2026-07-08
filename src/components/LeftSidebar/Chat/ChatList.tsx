import { useState } from "react";
import type { ChatListItemResponse } from "@/contracts/Response/ChatList/ChatListItemResponse";
import ChatListItem from "./ChatListItem";
import "./ChatList.css";

interface ChatListProps {
    chats: ChatListItemResponse[];
    onChatSelect?: (chatId: string) => void; 
}

export default function ChatList({ chats, onChatSelect }: ChatListProps) {
    const [activeChatId, setActiveChatId] = useState<string | null>(null);

    const handleSelectChat = (id: string) => {
        setActiveChatId(id);
        if (onChatSelect) {
            onChatSelect(id);
        }
    };

    return (
        <div className="chat-list-container">
            <div className="chat-list-header">
                <div className="chat-list-search">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="search-input" 
                    />
                </div>
            </div>

            <div className="chat-list-scroll">
                {chats.map((chat) => (
                    <ChatListItem 
                        key={chat.id} 
                        chat={chat} 
                        isActive={chat.id === activeChatId}
                        onClick={() => handleSelectChat(chat.id)}
                    />
                ))}
            </div>
        </div>
    );
}