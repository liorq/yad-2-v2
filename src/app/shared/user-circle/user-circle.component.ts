import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { UserInfoDisSidebarItems, UserInfoSidebarItems } from 'src/app/data/array';

@Component({
  selector: 'app-user-circle',
  templateUrl: './user-circle.component.html',
  styleUrls: ['../user-details/user-details.component.css','./user-circle.component.css']
})
export class UserCircleComponent implements OnInit{
  constructor(private appSvc:AppService){}
  isUserLogged!:boolean;
  circleText!:string;

  sidebarItems!:any[];
 @Input() isPopUpNeeded:boolean=false;
  ngOnInit(): void {
    this.isUserLogged=this.appSvc.isUserLogged();
   this.sidebarItems= this.isUserLogged?UserInfoSidebarItems:UserInfoDisSidebarItems
   this.circleText = (localStorage.getItem("userName") || "").toString().slice(0, 2);
  }
  disconnectUser(item:any){
    if(item.title.iconPathClass=='disconnect-icon'){
    this.appSvc.isUserLoggedSubject.next(false);
    localStorage.setItem("token","");
    localStorage.setItem("userName","");

    }

    }

    getNumOfAlerts(type:string){

      if(type=="user-last-search"){
        return JSON.parse(localStorage.getItem("searches")||"[]").length;
      }

      return 2;
    }

}
