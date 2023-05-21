import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.page.html',
  styleUrls: ['./edit-type.page.scss'],
})
export class EditTypePage implements OnInit {

  constructor(public modalController: ModalController) { }
  @Input() price?:number;
  ngOnInit() {
  }
  cancel() {

    this.modalController.dismiss({
      'dismissed': true
    });
  }

  confirm() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
