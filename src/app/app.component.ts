import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to angular-ex. This is angular 9 project';

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
}
