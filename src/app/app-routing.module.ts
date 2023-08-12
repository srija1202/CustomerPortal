import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './fund/fund.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { StocksComponent } from './stocks/stocks.component';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule ,FormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'',component:IndexComponent,pathMatch:'full'},
  {path:'index',component:IndexComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'fund',component:FundComponent,pathMatch:'full'},
  {path:'net-worth',component:NetWorthComponent,pathMatch:'full'},
  {path:'stocks',component:StocksComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
