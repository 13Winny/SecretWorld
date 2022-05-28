import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adm1',
  templateUrl: './adm1.component.html',
  styleUrls: ['./adm1.component.css']
})
export class Adm1Component implements OnInit {
  reply=false;
  response='';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.reply){
      this.reply=true;
    }
  }

  logout(){
   this.auth.logout();
  }

  submit(){
    this.auth.reply=this.response;
    this.reply=true;
  }
}
