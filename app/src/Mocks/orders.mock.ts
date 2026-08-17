import type { OrderModel } from "../Api/responseTypes";
import { getAccounts } from "./accounts.mock";
import { getProductVariants } from "./productVariants.mock";


let orders: OrderModel[] = [
  {
    id: "ord1",
    account: getAccounts()[0],
    productVariant: getProductVariants()[0],
    orderedAt: new Date(),
    status: "DELIVERED"
  },
  {
    id: "ord2",
    account: getAccounts()[1],
    productVariant: getProductVariants()[1],
    orderedAt: new Date(),
    status: "PROGRESSING"
  },
  {
    id: "ord3",
    account: getAccounts()[2],
    productVariant: getProductVariants()[2],
    orderedAt: new Date(),
    status: "SENT"
  },
  {
    id: "ord4",
    account: getAccounts()[3],
    productVariant: getProductVariants()[3],
    orderedAt: new Date(),
    status: "DELIVERED"
  }
];
export const getOrders = () => orders;
export const setOrders = (next: OrderModel[]) => { orders = next; };