import { getUsers } from "../Mocks/users.mock";
import type { UserModel } from "./responseTypes";
import { mockUserAuth } from "../Mocks/authUser.mock";
import { useDelay } from "../Utils/Hooks/useDelay";



export const useUserApi = () => {

    const delay = useDelay(300);

    return {
        getAll: async (): Promise<UserModel[]> => {
            return delay((resolve) => {
                resolve(getUsers())
            })
        },
        insertOne: async (user : UserModel) : Promise<UserModel> => {
            return delay((resolve) => {
                getUsers().push(user);
                user.id = Math.random() * 1000000;
                resolve(user)
            })
        },
        registerOne:async (user : UserModel) : Promise<UserModel> => {
            return delay((resolve) => {
                getUsers().push(user);
                user.id = Math.random() * 1000000;
                resolve(user);
                mockUserAuth.login(user.id, user.username)
            })
        },
        uploadAvatar:async (file : File) : Promise<{url:string}> => {
            return delay((resolve) => {
                const tempUrl = URL.createObjectURL(file);
                const id = mockUserAuth.getAccessToken().id;
                const accounts = getUsers();
                const index = accounts.findIndex(obj => obj.id === id);
    
                if (index === -1) return resolve(null);
    
                accounts[index].avatarHash = tempUrl;
                resolve({url:tempUrl})
            })
        },
        login:async (email : string, password : string) => {
            return delay((resolve) => {
                const users = getUsers();
                const index = users.findIndex(obj => obj.email === email && obj.password === password);
    
                if (index === -1) return resolve(null);
                mockUserAuth.login(users[index].id, users[index].username)
                resolve(mockUserAuth.getAccessToken())
            })
        },
        logout: async () : Promise<{success:boolean}> => {
            return delay((resolve) => {
                mockUserAuth.logout();
                resolve({success:true})
            })
        },
        updateOne: async (user : UserModel) : Promise<UserModel> => {
            return delay((resolve) => {
                const users = getUsers();
                const index = users.findIndex(obj => obj.id === user.id);
    
                if (index === -1) return resolve(null);
    
                users[index] = user;
                resolve(users[index]);
            })
        },
        updatePassword:async (id : number, newPassword : string) : Promise<{id:number, passwordChanged:boolean}> => {
            return delay((resolve) => {
                const users = getUsers();
                const index = users.findIndex(u => u.id === id);
    
                if (index === -1) return resolve(null);
                users[index].password = newPassword;
    
                resolve({
                    id,
                    passwordChanged: true
                });
            })
        },
        deleteOne: async (id:number) : Promise<UserModel> => {
            return delay((resolve) => {
                setTimeout(() => {
                    const users = getUsers();
                    const index = users.findIndex(u => u.id === id);
    
                    if (index === -1) return resolve(null);
    
                    const deleted = users[index];
                    users.splice(index, 1);
    
                    resolve(deleted);
                }, 300);
            })
        },
    }
}

