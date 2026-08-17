

export interface UserModel {
    id?:number,
    username:string,
    email:string,
    avatarHash?:string,
    password?:string,
    role:"ADMIN" | "MANAGER" | "ORDER_PREVIEW" | "ANALYTICS" | "SUPPORT"
}

export interface ConfigModel {
    id?:number,
    storeName:string,
    storeDescription:string,
    storeTitle:string,
    storeSubtitle:string,
    storeBannerHash?:string,
    storeLogoHash?:string,
    supportEnabled:boolean,
}

export interface ProductParamModel {
    id?:string,
    title:string,
    description:string
}

export interface ProductVariantModel {
    id?:string,
    name:string,
    available?:number,
    priceInUSD:number
    photoHash?:string,
    file?:DigitalProductModel,
    params:ProductParamModel[]
}

export interface ProductModel {
    id?:string,
    fullname:string,
    photoHash?:string
    description:string,
    categoryString:string,
    productType:"PHYSICAL" | "PRINTIFY" | "DIGITAL",
    variants:ProductVariantModel[]
}

export interface DigitalProductModel {
    id?:string,
    fileHash?:string
}

export interface AccountModel {
    id?:string,
    username:string,
    email:string,
    password?:string
    avatarHash?:string,
    country?:string,
    city?:string,
    postalCode?:string
    street?:string,
    buildingNumber?:number,
    unitNumber?:number
}

export interface OpinionModel {
    id?:string,
    account:AccountModel,
    comment?:string,
    opinion:number,
    createdAt?:Date,
    editedAt?:Date
}

export interface ChatMessage {
    id?:string,
    account:AccountModel,
    user:UserModel,
    accountToUser:boolean
}

export interface OrderModel {
    id?:string,
    account:AccountModel,
    productVariant:ProductVariantModel,
    orderedAt:Date,
    status:"DELIVERED" | "PROGRESSING" | "SENT"
}