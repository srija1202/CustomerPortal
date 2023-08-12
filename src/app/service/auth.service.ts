import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user} from '../models/login';
import { RouterModule ,Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl="https://portfolioauthorizationapi.azurewebsites.net/api/Auth"
  constructor(private http:HttpClient) { }
  authUser(user:any)
  {
    return this.http.post(this.baseUrl,user)
  }

}
