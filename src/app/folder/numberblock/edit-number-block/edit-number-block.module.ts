import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditNumberBlockPageRoutingModule } from './edit-number-block-routing.module';

import { EditNumberBlockPage } from './edit-number-block.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditNumberBlockPageRoutingModule
  ],
  declarations: [EditNumberBlockPage]
})
export class EditNumberBlockPageModule {}
