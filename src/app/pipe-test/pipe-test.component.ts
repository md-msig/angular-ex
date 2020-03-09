import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss']
})
export class PipeTestComponent implements OnInit {
  title = "Pipe Test";
  todaydate1 = new Date();
  jsonval = {name:"Rox", age:"25", toll:"160.5"};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
      "Sept", "Oct", "Nov", "Dec"];

  constructor() {
    console.log(this.jsonval);
    console.log(this.months);
  }

  ngOnInit(): void {
  }

}
