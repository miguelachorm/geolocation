import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLocationPageRoutingModule } from './my-location-routing.module';

import { MyLocationPage } from './my-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLocationPageRoutingModule
  ],
  declarations: [MyLocationPage]
})
export class MyLocationPageModule {}
