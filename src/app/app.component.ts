import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private globalservice: GlobalService){}
  title = 'Welcome to angular-ex. This is angular 9 project';
  todaydate;
  componentproperty;
  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]; 

  isavailable = false; //variable is set to true

  myClickFunction(event) {
    this.isavailable = !this.isavailable;
  }

  changemonths(event) {
    alert(event.target.value);
  }

  ngOnInit() {
    this.todaydate = this.globalservice.showTodayDate();
    console.log(this.globalservice.serviceproperty);
    this.globalservice.serviceproperty = "component created";
    this.componentproperty = this.globalservice.serviceproperty;
  }
}
