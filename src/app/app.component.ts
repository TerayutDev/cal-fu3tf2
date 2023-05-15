import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'โพย', url: '/folder/bill', icon: 'receipt' },
    { title: 'ยอดซื้อ', url: '/folder/order', icon: 'basket' },
    { title: 'ประเภท', url: '/folder/type', icon: 'build' },
     { title: 'ตัดยอดซื้อ', url: '/folder/purchase', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
