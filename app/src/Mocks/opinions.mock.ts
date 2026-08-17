import type { OpinionModel } from "../Api/responseTypes";
import { getAccounts } from "./accounts.mock";

let opinions: OpinionModel[] = [
  {
    id: "o1",
    account: getAccounts()[0],
    comment: "Great quality!",
    opinion: 5,
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: "o2",
    account: getAccounts()[1],
    comment: "Fast delivery.",
    opinion: 4,
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: "o3",
    account: getAccounts()[2],
    comment: "Could be better.",
    opinion: 3,
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: "o4",
    account: getAccounts()[3],
    comment: "Amazing product!",
    opinion: 5,
    createdAt: new Date(),
    editedAt: new Date()
  }
];
export const getOpinions = () => opinions;
export const setOpinions = (next: OpinionModel[]) => { opinions = next; };