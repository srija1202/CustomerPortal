import { Component, OnInit ,NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule ,FormsModule ,NgControl, NgForm} from '@angular/forms';
import { user } from '../models/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor (private router:Router ,private authservice :AuthService) {
    this.loginForm = new FormGroup({
      portfolioId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.authservice.authUser(this.loginForm.value).subscribe(
     (resposne : any) => {
      console.log(resposne);
      const user =resposne;
      localStorage.setItem('token',user.tokenString);
      localStorage.setItem('portfolioId',user.portfolioId);
      console.log(localStorage.getItem('portfolioId'));
      this.router.navigate(['/home']);
     },error=>
     {
      console.log(error);
      const er= error.error;
      alert(er);
     }
     );

}
  
  ngOnInit(){
  }
}

