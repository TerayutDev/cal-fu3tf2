import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';

import { FolderPage } from './folder.page';
import { NumberblockComponent } from './numberblock/numberblock.component';
import { OrderComponent } from './order/order.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TypeComponent } from './type/type.component';
import { AnnouncementComponent } from './announcement/announcement.component';

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
{
  path:'numberblock',
  component:NumberblockComponent
},
{
  path:'announcement',
  component:AnnouncementComponent
},
  {
    path: 'edit-number-block',
    loadChildren: () => import('./numberblock/edit-number-block/edit-number-block.module').then( m => m.EditNumberBlockPageModule)
  },
  {
    path: 'edit-type',
    loadChildren: () => import('./type/edit-type/edit-type.module').then( m => m.EditTypePageModule)
  },
  {
    path: 'edit-announcement',
    loadChildren: () => import('./announcement/edit-announcement/edit-announcement.module').then( m => m.EditAnnouncementPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
