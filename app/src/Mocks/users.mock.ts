import type { UserModel } from "../Api/responseTypes";

let users : UserModel[] = [
    {
        id:1,
        username:"Smith",
        email:"smith_124@gmail.com",
        role:"ADMIN",
        avatarHash:"knjiu",
        password:"1q2w3e4r5t6y"
    },
    {
        id:2,
        username:"Patric",
        email:"patric.cool@gmail.com",
        role:"MANAGER",
        avatarHash:"1hhbb",
        password:"1q2w3e4r5t6y"
    },
    {
        id:3,
        username:"Sandro",
        email:"sando1134@gmail.com",
        role:"ANALYTICS",
        avatarHash:"32dad",
        password:"1q2w3e4r5t6y"
    },
    {
        id:4,
        username:"Kowalski",
        email:"kowalski477@gmail.com",
        role:"SUPPORT",
        avatarHash:"njkwq1",
        password:"1q2w3e4r5t6y"
    },
    {
        id:5,
        username:"Rico",
        email:"ricooo@gmail.com",
        role:"ORDER_PREVIEW",
        avatarHash:"kbvma6",
        password:"1q2w3e4r5t6y"
    }
]

export const getUsers = () => users;
export const setUsers = (next: UserModel[]) => { users = next; };