import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MyLocationComponent } from './my-location/my-location.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }, {
    path: 'add',
    component: MyLocationComponent,
  }, {
    path: 'maps',
    component: MapsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
