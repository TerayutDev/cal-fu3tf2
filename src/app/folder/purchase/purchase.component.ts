import { Component, OnInit, ViewChild } from '@angular/core';
import { EditNumberBlockPage } from '../numberblock/edit-number-block/edit-number-block.page';
import { IOrderService } from 'src/app/service/order/order.interface';
import { IonModal, ModalController } from '@ionic/angular';
import { SystemNumberService } from 'src/app/service/system-number.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { IPurchaseService } from 'src/app/service/purchase/purchase.interface';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent  implements OnInit {


  constructor(private _systemNumber:SystemNumberService,public modalController: ModalController){}
  typeNumber='';
  numEdits:any[]=[];
  @ViewChild(IonModal)
  modal!: IonModal;
  purchaseList:IPurchaseService.PurchaseList[]=[];
  savebtn=false;
  digisSelect=0;
  presentingElement=undefined;
  price=0;

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
    this.purchaseList.push({roundId:1,typeLotto:'2 ตัวบน',sumPriceTotal:2500,numberList:[
      {number:'22',totalPrice:800,price:70},
      {number:'99',totalPrice:400,price:70},
      {number:'13',totalPrice:1000,price:70},
      {number:'19',totalPrice:300,price:70},
    ]});
  }

}
