import type { ProductModel } from "../Api/responseTypes";
import { getProductVariants } from "./productVariants.mock";

let products: ProductModel[] = [
  {
    id: "p1",
    fullname: "Red T-Shirt",
    photoHash: "prodhash_001",
    description: "Comfortable cotton T-shirt",
    categoryString: "clothes",
    productType: "PHYSICAL",
    variants: [getProductVariants()[0]]
  },
  {
    id: "p2",
    fullname: "Blue Hoodie",
    photoHash: "prodhash_002",
    description: "Warm hoodie for colder days",
    categoryString: "clothes",
    productType: "PHYSICAL",
    variants: [getProductVariants()[1]]
  },
  {
    id: "p3",
    fullname: "Digital Blueprint Pack",
    photoHash: "prodhash_003",
    description: "High-quality digital blueprints",
    categoryString: "digital",
    productType: "DIGITAL",
    variants: [getProductVariants()[2]]
  },
  {
    id: "p4",
    fullname: "Poster Collection",
    photoHash: "prodhash_004",
    description: "Artistic posters in A3 format",
    categoryString: "decorations",
    productType: "PRINTIFY",
    variants: [getProductVariants()[3]]
  }
];

export const getProducts = () => products;
export const setProducts = (next: ProductModel[]) => { products = next; };