import { create } from "zustand";


type NotifState = {
    notifs:NotifData[],
    addNotif:(message : string, onClick : () => void, buttonTitle? : string) => void;
    deleteNotif:(id : number) => void;
    clear:() => void;
}

type NotifData = {
    id?:number
    message:string,
    buttonTitle:string,
    onClick:() => void
}

const useNotifStore = create<NotifState>((set) => ({
    notifs:[],
    addNotif: (message, onClick, buttonTitle = "OK") => set((store) => ({notifs:[...store.notifs, {id:store.notifs.length, message, onClick:() => {
        const id = store.notifs.length;
        store.deleteNotif(id);
        onClick();
    }, buttonTitle}]})),
    deleteNotif:(id) => set((store) => ({notifs:store.notifs.filter((obj) => obj.id !== id)})),
    clear:() => set(() => ({notifs:[]}))
}));

export {useNotifStore}