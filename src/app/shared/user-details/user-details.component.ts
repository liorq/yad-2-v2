import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input()RequiredActionsObj={isXSignNeeded:true,isDisconnectNeeded:true,isPersonalAreaNeeded:true}
  @Input()textColor:string='black';
  isSideBarOpen!:boolean;
 @Input()isTopBarNeeded!:boolean;
 @Input()isPopUpNeeded!:boolean;
constructor(private appSvc:AppService){}
toggleSideBar(){
  this.appSvc.isSideBarOpen.next(false)

}
disconnectUser(item:string){
  this.appSvc.disconnectUser(item)
    }
}
