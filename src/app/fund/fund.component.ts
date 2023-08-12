import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { funddisplay } from '../models/fund';
import { FundService } from '../service/fund.service';


@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['fund.component.css']
})
export class FundComponent implements OnInit {
fundlist: funddisplay[]=[];
fundform = new FormGroup({
  mutualFundName: new FormControl('', [Validators.required]),
});

  constructor(private http : HttpClient) { }
  OnSearch()
  {
    this.fundlist.pop();
    this.http.get<any>('https://dailymutualfundsnavmicroservice.azurewebsites.net/api/MutualFundNAV/'+this.fundform.controls['mutualFundName'].value).subscribe(data=>
    {
      console.log(data);
      this.fundlist.push(data);
      console.log(this.fundlist)
    })
  }
  ngOnInit() {
  }

}
