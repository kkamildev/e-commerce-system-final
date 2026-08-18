import { getAccounts } from "../Mocks/accounts.mock";
import { mockAccountAuth } from "../Mocks/authAccount.mock";
import { useDelay } from "../Utils/Hooks/useDelay";
import type { AccountModel} from "./responseTypes";


export const useAccountApi = () => {
    const delay = useDelay(300);
    return {
        getOne:async () : Promise<AccountModel> => {
            return delay((resolve) => {
                const id = mockAccountAuth.getAccessToken().id;
                resolve(getAccounts().find((obj) => obj.id === id));
            })
        },
        registerOne:async (account : AccountModel, emailCode : string) : Promise<AccountModel> => {
            return delay((resolve) => {

                const saved = localStorage.getItem("emailCode");
                if (saved === emailCode) {
                    getAccounts().push(account);
                    account.id = Date.now().toString()
                    resolve(account);
                    mockAccountAuth.login(account.id, account.username)
                }

                if(!emailCode) {
                    const code = Math.floor(100000 + Math.random() * 900000).toString();
                    localStorage.setItem("emailCode", code);
                    alert("Your verification code: "+ code)
                } else {

                }

            })
        },
        uploadAvatar:async (file : File) : Promise<{url:string}> => {
            return delay((resolve) => {
                const tempUrl = URL.createObjectURL(file);
                const id = mockAccountAuth.getAccessToken().id;
                const accounts = getAccounts();
                const index = accounts.findIndex(obj => obj.id === id);
    
                if (index === -1) return resolve(null);
    
                accounts[index].avatarHash = tempUrl;
                resolve({url:tempUrl})
            })
        },
        login:async (email : string, password : string) => {
            return delay((resolve) => {
                const accounts = getAccounts();
                const index = accounts.findIndex(obj => obj.email === email && obj.password === password);
    
                if (index === -1) return resolve(null);
                mockAccountAuth.login(accounts[index].id, accounts[index].username)
                resolve(mockAccountAuth.getAccessToken())
            })
        },
        logout: async () : Promise<{success:boolean}> => {
            return delay((resolve) => {
                mockAccountAuth.logout();
                resolve({success:true})
            })
        },
        updateOne: async (account : AccountModel) : Promise<AccountModel> => {
            return delay((resolve) => {
                const accounts = getAccounts();
                const index = accounts.findIndex(obj => obj.id === account.id);
    
                if (index === -1) return resolve(null);
    
                accounts[index] = account;
                resolve(accounts[index]);
            })
        },
        updatePassword:async (newPassword : string) : Promise<{id:string, passwordChanged:boolean}> => {
            return delay((resolve) => {
                const accounts = getAccounts();
                const id = mockAccountAuth.getAccessToken().id;
                const index = accounts.findIndex(u => u.id === id);
    
                if (index === -1) return resolve(null);
                accounts[index].password = newPassword;
    
                resolve({
                    id,
                    passwordChanged: true
                });
            })
        },
        deleteOne: async () : Promise<AccountModel> => {
            return delay((resolve) => {
                setTimeout(() => {
                    const users = getAccounts();
                    const index = users.findIndex(u => u.id === mockAccountAuth.getAccessToken().id);
    
                    if (index === -1) return resolve(null);
    
                    const deleted = users[index];
                    users.splice(index, 1);
    
                    resolve(deleted);
                }, 300);
            })
        },
    }
}