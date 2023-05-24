import { Component, OnInit } from '@angular/core';
import { IBillService } from 'src/app/service/bill/bill.interface';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent  implements OnInit {
  typeList=[
    {id:1,type:'2บน',code:'PT01',digit:2,price:70,truePrice:100},
    {id:2,type:'2ล่าง',code:'PT02',digit:2,price:70,truePrice:100},
    {id:3,type:'วิ่งบน',code:'PT03',digit:1,price:70,truePrice:100},
    {id:4,type:'วิ่งล่าง',code:'PT04',digit:1,price:70,truePrice:100},
    {id:5,type:'3บน',code:'PT05',digit:3,price:70,truePrice:100},
    {id:6,type:'3ล่าง',code:'PT06',digit:3,price:70,truePrice:100},
    {id:7,type:'3โต๊ด',code:'PT07',digit:3,price:70,truePrice:100},
    {id:8,type:'2โต๊ด',code:'PT08',digit:2,price:70,truePrice:100},
   ]
   billList:IBillService.AddBillList[]=[];
  constructor() { }

  ngOnInit() {
    this.addBillLine();
  }
  addBillLine(){
      this.billList.push({typeCode:'',number:'',price:0});
  }
  cancel() {


  }

  confirm() {

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    //  this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
