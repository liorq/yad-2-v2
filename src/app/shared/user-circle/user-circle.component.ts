import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-user-circle',
  templateUrl: './user-circle.component.html',
  styleUrls: ['./user-circle.component.css','../user-details/user-details.component.css']
})
export class UserCircleComponent implements OnInit{
  constructor(private appSvc:AppService){}
  isUserLogged!:boolean;
  ngOnInit(): void {
    this.isUserLogged=this.appSvc.isUserLogged();
   console.log(this.isUserLogged)
  }
}
