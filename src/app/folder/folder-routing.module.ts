import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';

import { FolderPage } from './folder.page';
import { OrderComponent } from './order/order.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'bill',
    component: BillComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'type',
    component: TypeComponent
  },
  {
    path: 'purchase',
    component: PurchaseComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
