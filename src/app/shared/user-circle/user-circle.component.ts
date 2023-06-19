import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { UserInfoSidebarItems } from 'src/app/data/array';

@Component({
  selector: 'app-user-circle',
  templateUrl: './user-circle.component.html',
  styleUrls: ['../user-details/user-details.component.css','./user-circle.component.css']
})
export class UserCircleComponent implements OnInit{
  constructor(private appSvc:AppService){}
  isUserLogged!:boolean;


  sidebarItems=UserInfoSidebarItems
 @Input() isPopUpNeeded:boolean=false;
  ngOnInit(): void {
    this.isUserLogged=this.appSvc.isUserLogged();
   console.log(this.isUserLogged)
  }
  disconnectUser(){
    this.appSvc.isUserLoggedSubject.next(false);
    localStorage.setItem("token","");
    }
}
