import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditNumberBlockPage } from './edit-number-block.page';

const routes: Routes = [
  {
    path: '',
    component: EditNumberBlockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditNumberBlockPageRoutingModule {}
