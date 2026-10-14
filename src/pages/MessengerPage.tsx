import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "@/context/SideBarContext"
import PageLayout from "@/layouts/PageLayout/PageLayout";
import ChatList from "@/components/LeftSidebar/Chat/ChatList";
import ChatView from "@/components/MainContent/ChatView";
import Settings from "@/components/LeftSidebar/Settings/Settings";
import FriendList from "@/components/LeftSidebar/Friends/FriendList";
import { mockChatList } from "@/contracts/Common/ChatMock";

export default function MessengerPage() {
    // 1. Отримуємо дані з Router
    const { chatId } = useParams(); // Дістаємо ID чату з URL (наприклад /chat/123)
    const location = useLocation(); // Дістаємо поточний шлях (наприклад /settings)
    const navigate = useNavigate(); // Функція для зміни URL

    // 2. Отримуємо стан правої панелі з Контексту
    const { rightContent } = useSidebar();

    // 3. ЛОГІКА ЛІВОЇ ПАНЕЛІ (залежить від URL)
    let leftContent = null;
    if (location.pathname === "/settings") {
        leftContent = <Settings onBack={() => navigate("/")} /* передаємо потрібні пропси */ userName={""} email={""} phoneNumber={""} twoFactorEnabled={false} firstName={""} lastName={""} /* передаємо потрібні пропси */ />;
    } else if (location.pathname === "/contacts") {
        leftContent = <FriendList onBack={() => navigate("/")} friends={[]} />;
    } else {
        // За замовчуванням (шлях "/" або "/chat/:id") показуємо список чатів
        leftContent = (
            <ChatList 
                chats={mockChatList} 
                activeChatId={chatId} // Підсвічуємо активний чат
                onChatSelect={(id) => navigate(`/chat/${id}`)} // Змінюємо URL при кліку!
                onOpenSettings={() => navigate("/settings")}
                onOpenContacts={() => navigate("/contacts")}
            />
        );
    }

    // 4. ЛОГІКА ЦЕНТРАЛЬНОЇ ПАНЕЛІ
    // Якщо в URL є chatId — малюємо ChatView, інакше — нічого (або заглушку)
    const mainContent = chatId ? (
        <ChatView 
            chatId={chatId} 
            onBack={() => navigate("/")} // На мобільному "Назад" просто скидає URL на головну
        />
    ) : null;

    // 5. Рендеримо Layout
    return (
        <PageLayout
            left={leftContent}
            main={mainContent}
            right={rightContent} // Береться напряму з контексту
        />
    );
}