import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http :HttpClient) { }
  getAllstocks() : Observable<string[]>
  {
    return this.http.get<string[]>('https://dailysharespriceapi.azurewebsites.net/api/DailySharePrice');
    
  }
}
