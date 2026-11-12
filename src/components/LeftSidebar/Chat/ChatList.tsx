import { useState } from "react";
import type { ChatListItemResponse } from "@/contracts/Response/ChatList/ChatListItemResponse";
import ChatListItem from "./ChatListItem";
import { IoMdMenu, IoMdBookmark, IoMdSettings, IoMdMoon } from "react-icons/io";
import RoundButton from "@/components/ui/RoundButton";
import DropdownMenu, { type DropdownMenuItem } from "@/components/ui/DropdownMenu"; 
import { MdOutlinePeople } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { usePageView } from "@/context/PageViewContext";
import { useTheme } from "@/context/ThemeProvider";
import BrandButton from "@/components/ui/BrandButton";
import styles from "./ChatList.module.css";
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
    const { theme, toggleTheme } = useTheme();

    const handleSelectChat = (id: string) => {
        if (onChatSelect) {
            onChatSelect(id);
        }
    };

    const { setContent, closeContent } = usePageView();

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
                setContent(<MyProfile onClose={() => closeContent("right")} />, "right");
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
            title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
            onClick: toggleTheme
        }
    ];

    return (
        <div className={styles["chat-list-container"]}>
            <div className={styles["chat-list-brandbar"]}>
                <BrandButton size="compact" />
                <div className={styles["chat-menu-anchor"]}>
                    <RoundButton 
                        icon={<IoMdMenu size={24} />} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ariaLabel="Open menu"
                        />
                    {isMenuOpen && (
                        <DropdownMenu
                            items={menuItems}
                            onClose={() => setIsMenuOpen(false)}
                        />
                    )}
                </div>
            </div>

            <div className={styles["chat-list-heading"]}>
                <div>
                    <h1>Messages</h1>
                    <p>Your conversations, all in one place.</p>
                </div>
                {/*TODO: add unread messages later*/}
                <span className={styles["chat-count"]}>{chats.length}</span>
            </div>

            <div className={styles["chat-list-header"]}>
                <div className={styles["chat-list-search"]}>
                    <input 
                        type="text" 
                        placeholder="Search conversations" 
                        className={styles["search-input"]}
                        aria-label="Search conversations"
                    />
                </div>
            </div>

            <div className={styles["chat-list-scroll"]}>
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
