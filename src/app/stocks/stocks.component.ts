import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {StocksService} from '../service/stocks.service'
import { stock, stockdisplay } from '../models/fund';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['stocks.component.css']
})
export class StocksComponent implements OnInit {
stocklist : stockdisplay [] =[];
stockform = new FormGroup({
  stockname: new FormControl('', [Validators.required]),
});

  constructor(private stocks:StocksService,private http : HttpClient) { }
  OnSearch()
  {
    this.stocklist.pop();
    this.http.get<any>('https://dailysharespriceapi.azurewebsites.net/api/Stock/'+this.stockform.controls['stockname'].value).subscribe(data=>
    {
      console.log(data);
      this.stocklist.push(data);
      console.log(this.stocklist);
    })
  }
  ngOnInit() {
  }

}
