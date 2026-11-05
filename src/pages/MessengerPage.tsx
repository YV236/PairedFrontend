import { useEffect, type ReactNode } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { usePageView } from "@/context/PageViewContext";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import ChatList from "@/components/LeftSidebar/Chat/ChatList";
import ChatView from "@/components/MainContent/ChatView";
import Settings from "@/components/LeftSidebar/Settings/Settings";
import FriendList from "@/components/LeftSidebar/Friends/FriendList";
import { mockChatList } from "@/contracts/Common/ChatMock";

export default function MessengerPage() {
    // 1. Отримуємо дані з Router
    const location = useLocation(); // Дістаємо поточний шлях (наприклад /settings)
    const navigate = useNavigate(); // Функція для зміни URL
    // Розібратися з цим кодом, як він працює.
    const chatId = matchPath("/chat/:chatId", location.pathname)?.params.chatId;
    const returnPath = (location.state as { from?: string } | null)?.from;
    const navigateBack = () => {
        if (returnPath) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    // Маршрут визначає відновлюваний вміст сторінки, а контекст зберігає його
    // в слотах layout. Оновлюємо контекст після рендера, а не під час нього.
    const { rightContent, mainContent, leftContent, setContent } = usePageView();

    useEffect(() => {
        let leftComponent: ReactNode;

        // TODO: Потрібно подумати над тим, щоб здихатися цих іфів, може зробити механізм, котрий буде змінювати лінку та стан.
        if (location.pathname === "/settings") {
            leftComponent = (
                <Settings
                    onBack={navigateBack}
                    userName=""
                    email=""
                    phoneNumber=""
                    twoFactorEnabled={false}
                    firstName=""
                    lastName=""
                />
            );
        } else if (location.pathname === "/contacts") {
            leftComponent = <FriendList onBack={navigateBack} friends={[]} />;
        } else {
            leftComponent = (
                <ChatList
                    chats={mockChatList}
                    activeChatId={chatId}
                    onChatSelect={(id) => navigate(`/chat/${id}`)}
                    onOpenSettings={() => navigate("/settings", { state: { from: location.pathname } })}
                    onOpenContacts={() => navigate("/contacts", { state: { from: location.pathname } })}
                />
            );
        }

        setContent(leftComponent, "left");
        if (chatId) {
            setContent(<ChatView chatId={chatId} onBack={() => navigate("/")} />, "main");
        } else if (location.pathname === "/") {
            setContent(null, "main");
        }
    }, [chatId, location.pathname, navigate, setContent]);

    // 5. Рендеримо Layout, котрий береться напряму з контексту
    return (
        <PageLayout
            left={leftContent}
            main={mainContent}
            right={rightContent}
            // Потрібно переробити цей механізм, тому як будуть не тільки ці адреси
            mobileView={chatId 
                && location.pathname !== "/settings" 
                && location.pathname !== "/contacts" 
                ? "main" 
                : "left"}
        />
    );
}
