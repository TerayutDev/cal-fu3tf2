export namespace IPurchaseService{
  export interface PurchaseList{
    sumPriceTotal:number;
    roundId:number;
    typeLotto:string;
    numberList:NumberList[]
  }
export interface NumberList{
  number:string;
  totalPrice:number;
  price:number;
}
}
