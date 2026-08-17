
import type { ProductVariantModel } from "../Api/responseTypes";
import { getDigitalProducts } from "./digitalProducts.mock";
import { getProductParams } from "./productParams.mock";

let productVariants: ProductVariantModel[] = [
  {
    id: "pv1",
    name: "Red T-Shirt XL",
    available: 12,
    priceInUSD: 29.99,
    photoHash: "phash_001",
    file: getDigitalProducts()[0],
    params: [getProductParams()[0], getProductParams()[1]]
  },
  {
    id: "pv2",
    name: "Blue Hoodie M",
    available: 5,
    priceInUSD: 49.99,
    photoHash: "phash_002",
    file: getDigitalProducts()[1],
    params: [getProductParams()[1], getProductParams()[2]]
  },
  {
    id: "pv3",
    name: "Digital Blueprint",
    priceInUSD: 14.99,
    photoHash: "phash_003",
    file: getDigitalProducts()[2],
    params: [getProductParams()[3]]
  },
  {
    id: "pv4",
    name: "Poster A3",
    available: 30,
    priceInUSD: 9.99,
    photoHash: "phash_004",
    file: getDigitalProducts()[3],
    params: [getProductParams()[0], getProductParams()[2]]
  }
];

export const getProductVariants = () => productVariants;
export const setProductVariants = (next: ProductVariantModel[]) => { productVariants = next; };