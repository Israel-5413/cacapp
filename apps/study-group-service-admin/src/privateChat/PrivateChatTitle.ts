import { PrivateChat as TPrivateChat } from "../api/privateChat/PrivateChat";

export const PRIVATECHAT_TITLE_FIELD = "incomingMessageId";

export const PrivateChatTitle = (record: TPrivateChat): string => {
  return record.incomingMessageId?.toString() || String(record.id);
};
