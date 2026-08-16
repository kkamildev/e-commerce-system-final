

import {create} from "zustand"

type ErrorState = {
    errorAppeared:boolean,
    errorTitle:string,
    errorMessage?:string,
    errorType?:string,
    setError:(errorTitle : string, errorMessage : string, errorType : string) => void,
    dismissError:() => void
}

const useErrorStore = create<ErrorState>((set) => ({
    errorAppeared:false,
    errorTitle:null,
    errorMessage:null,
    errorType:null,
    setError:(errorTitle, errorMessage, errorType) => set(() => ({
        errorAppeared:true,
        errorTitle:errorTitle,
        errorMessage,
        errorType,
    })),
    dismissError:() => set(() => ({
        errorAppeared:false,
        errorMessage:null,
        errorTitle:null,
        errorType:null
    }))
}))

export {useErrorStore}