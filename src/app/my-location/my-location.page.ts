import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthService } from './../shared/fireauth.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.page.html',
  styleUrls: ['./my-location.page.scss'],
})
export class MyLocationPage implements OnInit {

	myLocation = [];
  current_location = {
    latitude: 0,
    longitude: 0
  }
   constructor(
   	private geolocation: Geolocation,
    private aptService: FireauthService,
    private router: Router
  ) { }

  ngOnInit() {
  	this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.myLocation = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.myLocation.push(a);
      })
    })

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.current_location = {latitude: resp.coords.latitude, longitude: resp.coords.longitude };
    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  saveLocations() {
    console.log(this.current_location);
    this.aptService.createBooking({
      current_location: this.current_location,
      current_time: new Date().getTime()}).then(res => {
    }).catch(error => console.log(error));
  	
  	
  }

}
