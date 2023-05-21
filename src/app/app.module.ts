import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonLabel } from '@ionic/angular';
import { TypeComponent } from './folder/type/type.component';
import { FormsModule } from '@angular/forms';
import { NumberblockComponent } from './folder/numberblock/numberblock.component';
import { AnnouncementComponent } from './folder/announcement/announcement.component';
@NgModule({
  declarations: [AppComponent,TypeComponent,NumberblockComponent,AnnouncementComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
