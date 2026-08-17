import type { AccountModel, ChatMessage, ConfigModel, DigitalProductModel, OpinionModel, OrderModel, ProductModel, ProductParamModel, ProductVariantModel, UserModel } from "./ResponseTypes";


export const users : UserModel[] = [
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

export const config : ConfigModel = {
    id:1,
    storeName:"Market via Kowalski",
    storeDescription:"Just a simple item market",
    storeTitle:"Special items only there",
    storeSubtitle:"Clothes, decorations, documents, schemes",
    supportEnabled:true,
    storeBannerHash:"ijiuyuhj2",
    storeLogoHash:"jhhuwd7a"
}

export const productParams: ProductParamModel[] = [
  { id: "pp1", title: "Color", description: "Available color variant" },
  { id: "pp2", title: "Size", description: "Dimensions of the product" },
  { id: "pp3", title: "Material", description: "Main material used" },
  { id: "pp4", title: "Edition", description: "Special edition info" }
];
export const digitalProducts: DigitalProductModel[] = [
  { id: "dp1", fileHash: "filehash_001" },
  { id: "dp2", fileHash: "filehash_002" },
  { id: "dp3", fileHash: "filehash_003" },
  { id: "dp4", fileHash: "filehash_004" }
];
export const productVariants: ProductVariantModel[] = [
  {
    id: "pv1",
    name: "Red T-Shirt XL",
    available: 12,
    priceInUSD: 29.99,
    photoHash: "phash_001",
    file: digitalProducts[0],
    params: [productParams[0], productParams[1]]
  },
  {
    id: "pv2",
    name: "Blue Hoodie M",
    available: 5,
    priceInUSD: 49.99,
    photoHash: "phash_002",
    file: digitalProducts[1],
    params: [productParams[1], productParams[2]]
  },
  {
    id: "pv3",
    name: "Digital Blueprint",
    priceInUSD: 14.99,
    photoHash: "phash_003",
    file: digitalProducts[2],
    params: [productParams[3]]
  },
  {
    id: "pv4",
    name: "Poster A3",
    available: 30,
    priceInUSD: 9.99,
    photoHash: "phash_004",
    file: digitalProducts[3],
    params: [productParams[0], productParams[2]]
  }
];

export const products: ProductModel[] = [
  {
    id: "p1",
    fullname: "Red T-Shirt",
    photoHash: "prodhash_001",
    description: "Comfortable cotton T-shirt",
    categoryString: "clothes",
    productType: "PHYSICAL",
    variants: [productVariants[0]]
  },
  {
    id: "p2",
    fullname: "Blue Hoodie",
    photoHash: "prodhash_002",
    description: "Warm hoodie for colder days",
    categoryString: "clothes",
    productType: "PHYSICAL",
    variants: [productVariants[1]]
  },
  {
    id: "p3",
    fullname: "Digital Blueprint Pack",
    photoHash: "prodhash_003",
    description: "High-quality digital blueprints",
    categoryString: "digital",
    productType: "DIGITAL",
    variants: [productVariants[2]]
  },
  {
    id: "p4",
    fullname: "Poster Collection",
    photoHash: "prodhash_004",
    description: "Artistic posters in A3 format",
    categoryString: "decorations",
    productType: "PRINTIFY",
    variants: [productVariants[3]]
  }
];

export const accounts: AccountModel[] = [
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
export const mockOpinions: OpinionModel[] = [
  {
    id: "o1",
    account: accounts[0],
    comment: "Great quality!",
    opinion: 5,
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: "o2",
    account: accounts[1],
    comment: "Fast delivery.",
    opinion: 4,
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: "o3",
    account: accounts[2],
    comment: "Could be better.",
    opinion: 3,
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: "o4",
    account: accounts[3],
    comment: "Amazing product!",
    opinion: 5,
    createdAt: new Date(),
    editedAt: new Date()
  }
];


export const mockChatMessages: ChatMessage[] = [
  { id: "cm1", account: accounts[0], user: users[0], accountToUser: true },
  { id: "cm2", account: accounts[1], user: users[1], accountToUser: false },
  { id: "cm3", account: accounts[2], user: users[2], accountToUser: true },
  { id: "cm4", account: accounts[3], user: users[3], accountToUser: false }
];

export const mockOrders: OrderModel[] = [
  {
    id: "ord1",
    account: accounts[0],
    productVariant: productVariants[0],
    orderedAt: new Date(),
    status: "DELIVERED"
  },
  {
    id: "ord2",
    account: accounts[1],
    productVariant: productVariants[1],
    orderedAt: new Date(),
    status: "PROGRESSING"
  },
  {
    id: "ord3",
    account: accounts[2],
    productVariant: productVariants[2],
    orderedAt: new Date(),
    status: "SENT"
  },
  {
    id: "ord4",
    account: accounts[3],
    productVariant: productVariants[3],
    orderedAt: new Date(),
    status: "DELIVERED"
  }
];







