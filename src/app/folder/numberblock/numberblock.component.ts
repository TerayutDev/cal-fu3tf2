import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { SystemNumberService } from 'src/app/service/system-number.service';
import { EditNumberBlockPage } from './edit-number-block/edit-number-block.page';
@Component({
  selector: 'app-numberblock',
  templateUrl: './numberblock.component.html',
  styleUrls: ['./numberblock.component.scss'],
})
export class NumberblockComponent  implements OnInit {
  constructor(private _systemNumber:SystemNumberService,public modalController: ModalController){}
  typeNumber='';
  numEdits:any[]=[];
  @ViewChild(IonModal)
  modal!: IonModal;
  savebtn=false;
  digisSelect=0;
  presentingElement=undefined;
  price=0;
   typeList=[
    {id:1,type:'2บน',code:'PT01',blockNumber:"22,99",price:7,digis:2,roundId:1},
    {id:2,type:'2ล่าง',code:'PT02',blockNumber:"45,01",price:7,digis:2,roundId:1},
    {id:3,type:'วิ่งบน',code:'PT03',blockNumber:"6,9",price:7,digis:1,roundId:1},
    {id:4,type:'วิ่งล่าง',code:'PT04',blockNumber:"9,5",price:7,digis:1,roundId:1},
    {id:5,type:'3ตัวบน',code:'PT05',blockNumber:"112,113",price:7,digis:3,roundId:1},
    {id:6,type:'3ตัวล่าง',code:'PT06',blockNumber:"445,903",price:7,digis:3,roundId:1},
    {id:7,type:'3ตัวโต๊ด',code:'PT07',blockNumber:"556,998",price:7,digis:3,roundId:1},
    {id:8,type:'2ตัวโต๊ด',code:'PT08',blockNumber:"22,66",price:7,digis:2,roundId:1},
   ]
  async editType(item:any){
this.price=item.price;
this.typeNumber=item.type;
this.numEdits=this._systemNumber.cutNumber(item.blockNumber);
this.digisSelect=item.digis;
const model=await this.modalController.create({component:EditNumberBlockPage, componentProps: {
  'digisSelect': item.digis,
  'numEdits': this._systemNumber.cutNumber(item.blockNumber),
  'typeNumber': item.type,
  'price':item.price
}});
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
   // this.presentingElement=document.querySelector('#');
  }

}
