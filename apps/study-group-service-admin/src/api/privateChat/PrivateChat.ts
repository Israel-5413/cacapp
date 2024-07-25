export type PrivateChat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateCreated: Date | null;
  incomingMessageId: string | null;
  outgoingMessageId: string | null;
  message: string | null;
};
