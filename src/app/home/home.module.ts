import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MyLocationComponent } from './my-location/my-location.component';
import { HomePageRoutingModule } from './home-routing.module';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MyLocationComponent, MapsComponent]
})
export class HomePageModule {}
