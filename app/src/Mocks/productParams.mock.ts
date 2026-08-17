import type { ProductParamModel } from "../Api/responseTypes";


let productParams: ProductParamModel[] = [
  { id: "pp1", title: "Color", description: "Available color variant" },
  { id: "pp2", title: "Size", description: "Dimensions of the product" },
  { id: "pp3", title: "Material", description: "Main material used" },
  { id: "pp4", title: "Edition", description: "Special edition info" }
];

export const getProductParams = () => productParams;
export const setProductParams = (next: ProductParamModel[]) => { productParams = next; };