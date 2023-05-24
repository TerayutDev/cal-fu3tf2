export namespace IOrderService{
  export interface OrderList{
    roundId:number;
    typeLotto:string;
    numberList:NumberList[]
  }
export interface NumberList{
  number:string;
  totalPrice:number;
}
}
