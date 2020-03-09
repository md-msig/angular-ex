import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../global.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.scss']
})
export class NewCmpComponent implements OnInit {
  newcomponent = "Entered in new component created";
  todaydate;
  newcomponentproperty;
  constructor(private globalservice: GlobalService) { }

  ngOnInit(): void {
    this.todaydate = this.globalservice.showTodayDate();
    this.newcomponentproperty = this.globalservice.serviceproperty;
  }

}
