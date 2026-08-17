import type { ConfigModel } from "../Api/responseTypes";


let config : ConfigModel = {
    id:1,
    storeName:"Market via Kowalski",
    storeDescription:"Just a simple item market",
    storeTitle:"Special items only there",
    storeSubtitle:"Clothes, decorations, documents, schemes",
    supportEnabled:true,
    storeBannerHash:"ijiuyuhj2",
    storeLogoHash:"jhhuwd7a"
}

export const getConfig = () => config;
export const setConfig = (next: ConfigModel) => { config = next; };