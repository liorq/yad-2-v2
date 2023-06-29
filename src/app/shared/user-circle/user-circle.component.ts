import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
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
  isHovered = false;
  timeoutId: any;
  sidebarItems!:any[];
 @Input() isPopUpNeeded:boolean=false;
  ngOnInit(): void {
    this.isUserLogged=this.appSvc.isUserLogged();
   this.sidebarItems= this.isUserLogged?UserInfoSidebarItems:UserInfoDisSidebarItems
   this.circleText = (localStorage.getItem("userName") || "").toString().slice(0, 2);
  }

  disconnectUser(item:any){
    this.appSvc.disconnectUser(item)
      }

    getNumOfAlerts(type:string){
      return this.appSvc.getNumOfAlerts(type)

      }
////can be shorter
      showDiv() {
        clearTimeout(this.timeoutId);
        this.isHovered = true;
      }

      hideDiv() {
        this.timeoutId = setTimeout(() => {
          this.isHovered = false;
        }, 2000);
      }
}
