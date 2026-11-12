import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePageView } from "@/context/PageViewContext";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import ChatList from "@/components/LeftSidebar/Chat/ChatList";
import ChatView from "@/components/MainContent/ChatView";
import Settings from "@/components/LeftSidebar/Settings/Settings";
import FriendList from "@/components/LeftSidebar/Friends/FriendList";
import { mockChatList } from "@/contracts/Common/ChatMock";
import styles from "./MessengerPage.module.css";

function EmptyChatState() {
    return (
        <div className={styles["messenger-empty-state"]}>
            <div className={styles["empty-state-logo"]}><img src="/favicon.svg" alt="" /></div>
            <span className={styles["empty-state-eyebrow"]}>YOUR SPACE TO SHARE</span>
            <h1>Good music starts<br />with a hello.</h1>
            <p>Pick a conversation and send a song. Paired helps it find its way to their music app.</p>
            <span className={styles["empty-state-hint"]}><i /> Choose a chat to get started</span>
            <span className={`${styles["empty-state-orbit"]} ${styles["empty-state-orbit-one"]}`} />
            <span className={`${styles["empty-state-orbit"]} ${styles["empty-state-orbit-two"]}`} />
        </div>
    );
}

export default function MessengerPage() {
    const navigate = useNavigate();
    const { chatId } = useParams();
    const {
        rightContent,
        mainContent,
        leftContent,
        mobileView,
        setContent,
        setMobileView,
    } = usePageView();

    function makeChatList() {
        return (
            <ChatList
                chats={mockChatList}
                activeChatId={chatId ?? null}
                onChatSelect={(selectedId) => navigate(`/app/${selectedId}`)}
                onOpenSettings={openSettings}
                onOpenContacts={openContacts}
            />
        );
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
    }

    function openContacts() {
        setContent(<FriendList onBack={returnToChat} friends={[]} />, "left");
        setMobileView("left");
    }

    function returnToChat() {
        setContent(null, "left");
        setMobileView(chatId ? "main" : "left");
    }

    useEffect(() => {
        setContent(null, "left");
        setContent(null, "right");

        if (!chatId) {
            setContent(null, "main");
            setMobileView("left");
            return;
        }

        setContent(
            <ChatView
                key={chatId}
                chatId={chatId}
                onBack={() => navigate("/app", { replace: true })}
            />,
            "main",
        );
        setMobileView("main");
    }, [chatId, navigate, setContent, setMobileView]);

    return (
        <PageLayout
            left={leftContent ?? makeChatList()}
            main={mainContent ?? (!chatId ? <EmptyChatState /> : undefined)}
            right={rightContent}
            mobileView={mobileView}
        />
    );
}
