import type { MessagePreviewResponse } from "./MessagePreviewResponse";
import type { UserPreviewResponse } from "./UserPreviewResponse";

export type ChatListItemResponse = {
    id: string;
    otherUser: UserPreviewResponse;
    lastMessage: MessagePreviewResponse;
    unreadCount: number;   
}
