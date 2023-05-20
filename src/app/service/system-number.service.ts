import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemNumberService {

  constructor() { }
  //parameter "22,33,44"
  cutNumber(number:string):string[]{
      const nums=number.split(",");
      return nums;
  }

  checkDigisNumber(number:string,digis:number):boolean{
    if(number.length!=digis){
      return false;
    }else{
      return true;
    }
  }
}
