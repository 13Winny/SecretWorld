import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pinvalue='';
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    if( this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }
 
  onSubmit(){
  if( this.auth.login(this.pinvalue)){
    this.router.navigate(['admin']);
  } 
  if(!this.auth.login(this.pinvalue)){
    window.alert('failed to login');
  }
  this.pinvalue='';
  }
  
}
