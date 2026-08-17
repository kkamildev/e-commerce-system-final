import type { DigitalProductModel } from "../Api/responseTypes";


let digitalProducts: DigitalProductModel[] = [
  { id: "dp1", fileHash: "filehash_001" },
  { id: "dp2", fileHash: "filehash_002" },
  { id: "dp3", fileHash: "filehash_003" },
  { id: "dp4", fileHash: "filehash_004" }
];

export const getDigitalProducts = () => digitalProducts;
export const setUsers = (next: DigitalProductModel[]) => { digitalProducts = next; };