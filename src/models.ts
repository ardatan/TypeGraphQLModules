export interface ChatDbObject {
    id: number;
    title: string;
    description: string;
}

export interface MessageDbObject {
    id: number;
    content: string;
    chatId: number;
}
