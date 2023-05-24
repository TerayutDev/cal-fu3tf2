import { Component, OnInit, ViewChild } from '@angular/core';
import { SystemNumberService } from 'src/app/service/system-number.service';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AddBillComponent } from './add-bill/add-bill.component';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent  implements OnInit {
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
   constructor(private _systemNumber:SystemNumberService,public modalController: ModalController){}
  typeNumber='';
  numEdits:any[]=[];
  @ViewChild(IonModal)
  modal!: IonModal;
  savebtn=false;
  digisSelect=0;
  presentingElement=undefined;
  price=0;
  async addBill(){

const model=await this.modalController.create({component:AddBillComponent});
return await model.present();

   }


  cancel() {

    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('', 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    //  this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  addline(){
    this.numEdits.push("");
  }

  checkNumber(event:any){
return this._systemNumber.checkDigisNumber(event.target.value,2);
  }

  ngOnInit() {
    this.addBill();
   // this.presentingElement=document.querySelector('#');
  }


}
