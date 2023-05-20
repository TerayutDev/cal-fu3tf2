import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-number-block',
  templateUrl: './edit-number-block.page.html',
  styleUrls: ['./edit-number-block.page.scss'],
})
export class EditNumberBlockPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  @Input() digisSelect?:string;
  @Input() numEdits?:string[];
  @Input() typeNumber?:string;
  @Input() price?:string;
  savebtn=false;
  numberEdits:any[]=[];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  cancel() {

    this.modalController.dismiss({
      'dismissed': true
    });
  }

  confirm() {
    this.modal.dismiss('', 'confirm');
  }
  addline(){
    this.numberEdits.push("");
  }
}
