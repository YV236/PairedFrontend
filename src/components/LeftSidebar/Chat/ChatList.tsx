import { useState } from "react";
import type { ChatListItemResponse } from "@/contracts/Response/ChatList/ChatListItemResponse";
import ChatListItem from "./ChatListItem";
import { IoMdMenu, IoMdBookmark, IoMdSettings, IoMdMoon } from "react-icons/io";
import RoundButton from "@/components/ui/RoundButton";
import DropdownMenu, { type DropdownMenuItem } from "@/components/ui/DropdownMenu"; 
import { MdOutlinePeople } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { useSidebar } from "@/context/SideBarContext"
import "./ChatList.css";
import MyProfile from "@/components/RightSideBar/MyProfile";

interface ChatListProps {
    chats: ChatListItemResponse[];
    activeChatId?: string | null;
    onChatSelect?: (chatId: string) => void; 
    onOpenSettings?: () => void;
    onOpenContacts?: () => void;
    onOpenProfile?: () => void;
}

export default function ChatList({ chats, activeChatId, onChatSelect, onOpenSettings, onOpenContacts }: ChatListProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSelectChat = (id: string) => {
        if (onChatSelect) {
            onChatSelect(id);
        }
    };

    const { setRightContent, closeRightSidebar } = useSidebar();

    const menuItems: DropdownMenuItem[] = [
        {
            icon: <IoMdBookmark />,
            title: "Saved Messages",
            onClick: () => console.log("Відкрито збережені повідомлення")
        },
        {
            icon: <IoPersonOutline />,
            title: "Profile",
            onClick: () => {
                setRightContent(<MyProfile onClose={closeRightSidebar}/>);
            }
        },
        {
            icon: <MdOutlinePeople />,
            title: "Contacts",
            onClick: () => {
                if (onOpenContacts) onOpenContacts();
            }
        },
        {
            icon: <IoMdSettings />,
            title: "Settings",
            onClick: () => {
                if (onOpenSettings) onOpenSettings();
            }
        },
        {
            icon: <IoMdMoon />,
            title: "Dark Mode",
            onClick: () => console.log("Перемикання теми")
        }
    ];

    return (
        <div className="chat-list-container">
            <div className="chat-list-header">

                <div style={{ position: "relative" }}>
                    <RoundButton 
                        icon={<IoMdMenu size={24} />} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    {isMenuOpen && (
                        <DropdownMenu
                            items={menuItems}
                            onClose={() => setIsMenuOpen(false)}
                        />
                    )}
                </div>
                
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