import type { ChatListItemResponse } from "../Response/ChatList/ChatListItemResponse";
import type { ChatResponse } from "../Response/Chat/ChatResponse"
import type { UserPreviewResponse } from "../Response/ChatList/UserPreviewResponse";

export const CURRENT_USER_ID = "me_123";

export const mockChatList: ChatListItemResponse[] = [
    {
        id: "chat_1",
        chatName: "Саня",
        otherUser: {
            id: "user_1",
            nickName: "o_petr",
            firstName: "Олександр",
            lastName: "Петренко",
            avatarUrl: "https://i.pravatar.cc/150?u=user_1",
        },
        lastMessage: {
            content: "Добре, тоді домовились на 18:00 🤝",
            sentAt: "2026-07-07T10:30:00Z",
        },
        unreadCount: 0,
    },
    {
        id: "chat_2",
        chatName: "Марія (дизайнер)",
        otherUser: {
            id: "user_2",
            nickName: "mary_K",
            firstName: "Марія",
            lastName: "Коваль",
            avatarUrl: "https://i.pravatar.cc/150?u=user_2",
        },
        lastMessage: {
            content: "Скинула нові макети, глянеш?",
            sentAt: "2026-07-07T12:15:00Z",
        },
        unreadCount: 2,
    },
    {
        id: "chat_3",
        chatName: "Макс (QA)",
        otherUser: {
            id: "user_3",
            nickName: "max",
            firstName: "Максим",
            lastName: "Сосновськи",
            avatarUrl: "https://i.pravatar.cc/150?u=user_3",
        },
        lastMessage: {
            content: "Баг пофіксили, можна заливати на прод.",
            sentAt: "2026-07-06T18:45:00Z",
        },
        unreadCount: 0,
    }
];

export const mockChats: ChatResponse[] = [
    {
        id: "chat_1",
        otherUser: {
            id: "user_1",
            nickName: "o_petr",
            firstName: "Олександр",
            lastName: "Петренко",
            avatarUrl: "https://i.pravatar.cc/150?u=user_1",
        },
        messages: [
            {
                id: "msg_1_1",
                senderId: "user_1",
                content: "Привіт! Підкажи, чи встигаємо ми завершити фічу до п'ятниці?",
                sentAt: "2026-07-07T10:20:00Z",
            },
            {
                id: "msg_1_2",
                senderId: CURRENT_USER_ID,
                content: "Привіт. Так, все йде за планом. Залишилось тільки тести написати.",
                sentAt: "2026-07-07T10:25:00Z",
            },
            {
                id: "msg_1_3",
                senderId: "user_1",
                content: "Супер, дякую за апдейт! Можемо ввечері зідзвонитись?",
                sentAt: "2026-07-07T10:28:00Z",
            },
            {
                id: "msg_1_4",
                senderId: CURRENT_USER_ID,
                content: "Добре, тоді домовились на 18:00 🤝",
                sentAt: "2026-07-07T10:30:00Z",
            }
        ]
    },
    {
        id: "chat_2",
        otherUser: {
            id: "user_2",
            nickName: "mary_K",
            firstName: "Марія",
            lastName: "Коваль",
            avatarUrl: "https://i.pravatar.cc/150?u=user_2",
        },
        messages: [
            {
                id: "msg_2_1",
                senderId: "user_2",
                content: "Привіт! Я там трохи змінила відступи в правому сайдбарі.",
                sentAt: "2026-07-07T12:14:00Z",
            },
            {
                id: "msg_2_2",
                senderId: "user_2",
                content: "Скинула нові макети, глянеш?",
                sentAt: "2026-07-07T12:15:00Z",
            }
        ]
    },
    {
        id: "chat_3",
        otherUser: {
            id: "user_3",
            nickName: "max",
            firstName: "Максим",
            lastName: "Сосновськи",
            avatarUrl: "https://i.pravatar.cc/150?u=user_3",
        },
        messages: [
            {
                id: "msg_3_1",
                senderId: "user_3",
                content: "Знайшли проблему зі стейтом в MessengerPage. При кліку на профіль друга нічого не відбувається.",
                sentAt: "2026-07-06T16:00:00Z",
            },
            {
                id: "msg_3_2",
                senderId: CURRENT_USER_ID,
                content: "Оу, секунду, я забув передати компонент в RightSidebar. Зараз виправлю.",
                sentAt: "2026-07-06T16:15:00Z",
            },
            {
                id: "msg_3_3",
                senderId: CURRENT_USER_ID,
                content: "Готово, перевіряй. Зробив пул-реквест.",
                sentAt: "2026-07-06T17:30:00Z",
            },
            {
                id: "msg_3_4",
                senderId: "user_3",
                content: "Баг пофіксили, можна заливати на прод.",
                sentAt: "2026-07-06T18:45:00Z",
            }
        ]
    }
];

export const mockFriendsList: UserPreviewResponse[] = [
    {
        id: "user_1",
        nickName: "o_petr",
        firstName: "Олександр",
        lastName: "Петренко",
        avatarUrl: "https://i.pravatar.cc/150?u=user_1",
    },
    {
        id: "user_2",
            nickName: "mary_K",
            firstName: "Марія",
            lastName: "Коваль",
        avatarUrl: "https://i.pravatar.cc/150?u=user_2",
    },
    {
        id: "user_3",
        nickName: "max",
        firstName: "Максим",
        lastName: "Сосновськи",
        avatarUrl: "https://i.pravatar.cc/150?u=user_3",
    },
    {
        id: "user_4",
        nickName: "IK",
        firstName: "Іван",
        lastName: "Коваленко",
        avatarUrl: "https://i.pravatar.cc/150?u=user_4",
    },
    {
        id: "user_5",
        nickName: "ann",
        firstName: "Анна",
        lastName: "Шевченко",
        avatarUrl: "https://i.pravatar.cc/150?u=user_5",
    },
    {
        id: "user_6",
        nickName: "dimaM",
        firstName: "Дмитро",
        lastName: "Мельник",
        avatarUrl: "https://i.pravatar.cc/150?u=user_6",
    }
];