import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  logginuser: any;
  msg ="Logged Out Successfully";

  constructor() { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.clear();
    alert(this.msg);
  }
}
