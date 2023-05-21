import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { EditTypePage } from './edit-type/edit-type.page';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})

export class TypeComponent  implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;
  price=0;
  constructor(public modalController: ModalController){}
   typeList=[
    {id:1,type:'2บน',code:'PT01',digit:2,price:70,truePrice:100},
    {id:2,type:'2ล่าง',code:'PT02',digit:2,price:70,truePrice:100},
    {id:3,type:'วิ่งบน',code:'PT03',digit:1,price:70,truePrice:100},
    {id:4,type:'วิ่งล่าง',code:'PT04',digit:1,price:70,truePrice:100},
    {id:5,type:'3ตัวบน',code:'PT05',digit:3,price:70,truePrice:100},
    {id:6,type:'3ตัวล่าง',code:'PT06',digit:3,price:70,truePrice:100},
    {id:7,type:'3ตัวโต๊ด',code:'PT07',digit:3,price:70,truePrice:100},
    {id:8,type:'2ตัวโต๊ด',code:'PT08',digit:2,price:70,truePrice:100},
   ]
 async  editType(item:any){
this.price=item.price;
const model=await this.modalController.create({component:EditTypePage, componentProps: {

  'price':item.price
}});
return await model.present();
   }


  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    //  this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  ngOnInit() {}

}
