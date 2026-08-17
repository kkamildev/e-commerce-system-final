import type { AccountModel } from "../Api/responseTypes";


let accounts: AccountModel[] = [
{
    id: "a1",
    username: "kowalski",
    email: "kowalski@example.com",
    avatarHash: "avatar_001",
    country: "Poland",
    city: "Kraków",
    postalCode: "30-001",
    street: "Długa",
    buildingNumber: 12,
    unitNumber: 4
  },
  {
    id: "a2",
    username: "anna_nowak",
    email: "anna@example.com",
    avatarHash: "avatar_002",
    country: "Poland",
    city: "Warszawa",
    postalCode: "00-002",
    street: "Prosta",
    buildingNumber: 5,
    unitNumber: 2
  },
  {
    id: "a3",
    username: "michal_dev",
    email: "michal@example.com",
    avatarHash: "avatar_003",
    country: "Poland",
    city: "Wrocław",
    postalCode: "50-003",
    street: "Szeroka",
    buildingNumber: 20,
    unitNumber: 1
  },
  {
    id: "a4",
    username: "julia_art",
    email: "julia@example.com",
    avatarHash: "avatar_004",
    country: "Poland",
    city: "Gdańsk",
    postalCode: "80-004",
    street: "Morska",
    buildingNumber: 7,
    unitNumber: 3
  }
];

export const getAccounts = () => accounts;
export const setAccounts = (next: AccountModel[]) => { accounts = next; };