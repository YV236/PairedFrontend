import type { UserPreviewResponse } from "../ChatList/UserPreviewResponse";
import type { MessageResponse } from "./MessageResponse";

export type ChatResponse = {
    id: string;
    otherUser: UserPreviewResponse;
    messages: MessageResponse[];
}
