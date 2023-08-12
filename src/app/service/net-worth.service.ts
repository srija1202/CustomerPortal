import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {asset} from '../models/fund';;
@Injectable({
  providedIn: 'root'
})
export class NetWorthService {
neturl='https://calculatnetworthapi.azurewebsites.net/api/NetWorth/';
  constructor(private http : HttpClient) { }
  getallstocks()
  {
    let portfolioId = localStorage.getItem('portfolioId');
    let mut= this.neturl+portfolioId;
    return this.http.get<any>(mut);
  }
}
