import type { ChatMessageModel } from "../Api/responseTypes";
import { getAccounts } from "./accounts.mock";
import { getUsers } from "./users.mock";

let chatMessages: ChatMessageModel[] = [
  { id: "cm1", account: getAccounts()[0], user: getUsers()[0], accountToUser: true },
  { id: "cm2", account: getAccounts()[1], user: getUsers()[1], accountToUser: false },
  { id: "cm3", account: getAccounts()[2], user: getUsers()[2], accountToUser: true },
  { id: "cm4", account: getAccounts()[3], user: getUsers()[3], accountToUser: false }
];

export const getChatMessages = () => chatMessages;
export const setChatMessages = (next: ChatMessageModel[]) => { chatMessages = next; };