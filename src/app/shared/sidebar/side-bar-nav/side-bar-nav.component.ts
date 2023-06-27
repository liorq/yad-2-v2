import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { fastSearchSidebarItems, navigationMenuItems, settingSidebarItems, sidebarMenuItems } from 'src/app/data/array';

@Component({
  selector: 'app-side-bar-nav',
  templateUrl: './side-bar-nav.component.html',
  styleUrls: ['./side-bar-nav.component.scss']
})
export class SideBarNavComponent implements OnInit{
  isSideBarOpen!:boolean;
constructor(private appSvc:AppService){}
@Input()customClassObj:any={"mini-buttons":false};
 @Input()customHiddenObj:any={'customHidden':false,'hidden':true};
clickCounter=0
ngOnInit(): void {

this.appSvc.isSideBarOpen.subscribe((newStatus)=>{
  this.isSideBarOpen=newStatus;
  console.log("click",this.clickCounter)
  if(this.clickCounter>0)
     this.toggleSideBar()
this.clickCounter++
})
}

 openItem(index:number, item:any) {
  const canItemBeOpen = index >= 5 && this.customClassObj['mini-buttons'];
  if (!canItemBeOpen)
    return;

  this.isSideBarItemOpen[index] = !this.isSideBarItemOpen[index];
}
sidebarMenuItems =sidebarMenuItems
navigationMenuItems = navigationMenuItems
@Input()sideBarNavClass="sidenav"
@Input()isUserDetailsNeeded:boolean=true;
@Input()sideBarId='sidenav';
@Input()isSettingIconsNeeded=false;

@Input()textColor:string='black';
@Input()sideBarData=[...this.sidebarMenuItems,...this.navigationMenuItems]
@Input()RequiredActionsObj={isXSignNeeded:true,isDisconnectNeeded:true,isPersonalAreaNeeded:true}
isSideBarItemOpen:boolean[]=[false,false,false,false,false,false,false]
@Input()isFastSearchIconsNeeded:boolean=true;
settingSidebarItems = settingSidebarItems
FastSearchSidebarItems = fastSearchSidebarItems

toggleSideBar() {
  const nav = document.getElementById(this.sideBarId);
  const isOpen = nav?.classList.contains('show');

  nav?.classList.toggle('show', !isOpen);
  nav?.classList.toggle('none', isOpen);
  this.isSideBarOpen = !isOpen;
}
getNumOfAlerts(type:string){
  return this.appSvc.getNumOfAlerts(type)

  }
}
