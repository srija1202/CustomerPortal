import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { asset, fund, funddisplay, stock, stockdisplay, total } from '../models/fund';
import { NetWorthService } from '../service/net-worth.service';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['net-worth.component.css']
})
export class NetWorthComponent implements OnInit {

  constructor(private http : HttpClient, private net : NetWorthService) { }

  assetlist: asset []=[] ;
  mutuallist : fund[]=[];
  stocklist : stock[]=[];
  d: any;
  b : any;
  a: any;
  networth :any;
  ngOnInit(){
    this.net.getallstocks().subscribe(data => {
      console.log(data)
      this.assetlist.push(data);
      console.log(this.assetlist);
      this.mutuallist=this.assetlist[0].mutualFundList;
      this.stocklist=this.assetlist[0].stockList;
      this.a=0;
      for(let fund of this.mutuallist){
        this.http.get<any>('http://localhost:55953/api/MutualFundNAV/'+fund.mutualFundName).subscribe(respo =>
        {
          this.d = fund.mutualFundUnits*respo.mutualFundValue;
          this.a =this.a + this.d;
          console.log(typeof this.d);
          console.log(this.a);
        });
      }
      for(let stock of this.stocklist)
      {
        this.http.get<any>('https://dailysharespriceapi.azurewebsites.net/api/Stock/'+stock.stockName).subscribe(respo =>
        {
          this.b = stock.stockCount*respo.stockValue;
          this.a =this.a + this.b;
          console.log(this.a);
        });
      }
    });
  }
  gettotal()
  {
    this.networth=this.a;
    return this.networth;
  }
}