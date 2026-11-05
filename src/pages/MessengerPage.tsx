import { useNavigate } from "react-router-dom";
import { usePageView } from "@/context/PageViewContext";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import ChatList from "@/components/LeftSidebar/Chat/ChatList";
import ChatView from "@/components/MainContent/ChatView";
import Settings from "@/components/LeftSidebar/Settings/Settings";
import FriendList from "@/components/LeftSidebar/Friends/FriendList";
import { mockChatList } from "@/contracts/Common/ChatMock";

export default function MessengerPage() {
    const navigate = useNavigate();
    const {
        rightContent,
        mainContent,
        leftContent,
        mobileView,
        activeChatId,
        setContent,
        setMobileView,
        setActiveChatId,
    } = usePageView();

    function makeChatList(selectedChatId: string | null = activeChatId) {
        return (
            <ChatList
                chats={mockChatList}
                activeChatId={selectedChatId}
                onChatSelect={openChat}
                onOpenSettings={openSettings}
                onOpenContacts={openContacts}
            />
        );
    }

    function openChat(chatId: string) {
        setActiveChatId(chatId);
        setContent(makeChatList(chatId), "left");
        setContent(<ChatView key={chatId} chatId={chatId} onBack={showChatList} />, "main");
        setMobileView("main");
        navigate(`/chat/${chatId}`);
    }

    function openSettings() {
        setContent(
            <Settings
                onBack={returnToChat}
                userName=""
                email=""
                phoneNumber=""
                twoFactorEnabled={false}
                firstName=""
                lastName=""
            />,
            "left",
        );
        setMobileView("left");
        navigate("/settings");
    }

    function openContacts() {
        setContent(<FriendList onBack={returnToChat} friends={[]} />, "left");
        setMobileView("left");
        navigate("/contacts");
    }

    function returnToChat() {
        setContent(makeChatList(), "left");
        setMobileView(activeChatId ? "main" : "left");
        navigate(activeChatId ? `/chat/${activeChatId}` : "/", { replace: true });
    }

    function showChatList() {
        setActiveChatId(null);
        setContent(makeChatList(null), "left");
        setContent(null, "main");
        setMobileView("left");
        navigate("/", { replace: true });
    }

    return (
        <PageLayout
            left={leftContent ?? makeChatList(null)}
            main={mainContent}
            right={rightContent}
            mobileView={mobileView}
        />
    );
}
