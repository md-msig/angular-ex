import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  serviceproperty = "Service Created";
  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
