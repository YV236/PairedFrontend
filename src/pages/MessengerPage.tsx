import { useState, type ReactNode } from "react";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import Settings from "@/components/LeftSidebar/Settings/Settings";
import MyProfile from "@/components/RightSideBar/MyProfile";
import { mockChatList, mockFriendsList } from "@/contracts/Common/ChatMock";
import ChatList from "@/components/LeftSidebar/Chat/ChatList";
import ChatView from "@/components/MainContent/ChatView";
import FriendList from "@/components/LeftSidebar/Friends/FriendList";

export default function MessengerPage() {
      

    const [mainContent, setMainContent] = useState<ReactNode>(null);

    const [rightContent, setRightContent] = useState<ReactNode>(null);

    const toggleFriendInfo = () => {
        setRightContent(
            <MyProfile onClose={() => setRightContent(null)} />
        );
    };

    const showSettings = () => {
        setLeftContent(
            <Settings 
                firstName="YV" 
                lastName=""
                userName="y_vnnk"
                phoneNumber="+380 66 453 56 31"
                email="example@mail.com"
                twoFactorEnabled={true}
                onBack={() => setLeftContent(chatListElement)} 
            />
        );
    };

    const showFriendsList = () => {
        setLeftContent(
            <FriendList
                friends={mockFriendsList}
                onFriendSelect={(friendId) => {
                    console.log("Клікнули на друга з ID:", friendId);

                    const existingChat = mockChatList.find(chat => chat.otherUser.id === friendId);

                    if (existingChat) {
                        setMainContent(<ChatView chatId={existingChat.id} />);
                    } else {                        
                        setMainContent(
                            <div style={{ color: "white", padding: "20px" }}>
                                Немає чату. Створюємо новий чат з {friendId}...
                            </div>
                        );
                    }
                }}
                onBack={() => setLeftContent(chatListElement)}
            />
        )
    }

    const chatListElement = (
        <ChatList 
            chats={mockChatList} 
            onChatSelect={(chatId) => {
                console.log("Відкрити чат номер:", chatId);
                setMainContent(<ChatView chatId={chatId} />);
            }}
            onOpenSettings={showSettings}
            onOpenContacts={showFriendsList}
            onOpenProfile={toggleFriendInfo}
        />
    );
    const [leftContent, setLeftContent] = useState(chatListElement);

    return (
        <>
            <PageLayout
                left={leftContent}
                main={mainContent}
                right={rightContent}
            />
        </>
    );
}