import { Component, OnInit, ViewChild } from '@angular/core';
import { EditNumberBlockPage } from '../numberblock/edit-number-block/edit-number-block.page';
import { OverlayEventDetail } from '@ionic/core/components';
import { SystemNumberService } from 'src/app/service/system-number.service';
import { IonModal, ModalController } from '@ionic/angular';
import { EditAnnouncementPage } from './edit-announcement/edit-announcement.page';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent  implements OnInit {

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
    {id:1,type:'2บน',code:'PT01',announcementNumber:"22,99",digis:2,roundId:1},
    {id:2,type:'2ล่าง',code:'PT02',announcementNumber:"45,01",digis:2,roundId:1},
    {id:3,type:'วิ่งบน',code:'PT03',announcementNumber:"6,9",digis:1,roundId:1},
    {id:4,type:'วิ่งล่าง',code:'PT04',announcementNumber:"9,5",digis:1,roundId:1},
    {id:5,type:'3ตัวบน',code:'PT05',announcementNumber:"112,113",digis:3,roundId:1},
    {id:6,type:'3ตัวล่าง',code:'PT06',announcementNumber:"445,903",digis:3,roundId:1},
    {id:7,type:'3ตัวโต๊ด',code:'PT07',announcementNumber:"556,998",digis:3,roundId:1},
    {id:8,type:'2ตัวโต๊ด',code:'PT08',announcementNumber:"22,66",digis:2,roundId:1},
   ]
  async editType(item:any){
this.price=item.price;
this.typeNumber=item.type;
this.numEdits=this._systemNumber.cutNumber(item.announcementNumber);
this.digisSelect=item.digis;
const model=await this.modalController.create({component:EditAnnouncementPage, componentProps: {
  'digisSelect': item.digis,
  'numEdits': this._systemNumber.cutNumber(item.announcementNumber),
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
