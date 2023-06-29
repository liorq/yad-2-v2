import { HostListener, Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { fastSearchSidebarItems, navigationMenuItems, settingSidebarItems, sidebarMenuItems } from 'src/app/data/array';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar-nav',
  templateUrl: './side-bar-nav.component.html',
  styleUrls: ['./side-bar-nav.component.scss']
})
export class SideBarNavComponent implements OnInit,OnDestroy{
  isSideBarOpen!:boolean;
constructor(private appSvc:AppService){}
@Input()customClassObj:any={"mini-buttons":false};
 @Input()customHiddenObj:any={'customHidden':false,'hidden':true};
clickCounter=0
private sidebarOpenSubscription: Subscription | undefined;

ngOnInit(): void {
  this.sidebarOpenSubscription = this.appSvc.isSideBarOpen
    .pipe(distinctUntilChanged())
    .subscribe((newStatus:any) => {
      this.isSideBarOpen = newStatus;
      if (this.clickCounter > 0) {
        this.toggleSideBar();
      }
      this.clickCounter++;
      console.log("this.clickCounter", this.clickCounter);
    });

  this.onWindowResize();
}

ngOnDestroy(): void {
  if (this.sidebarOpenSubscription) {
    this.sidebarOpenSubscription.unsubscribe();
  }
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

  @HostListener('window:resize', ['$event'])
  onWindowResize(event?: EventTarget) {
    const isPersonalSideBar = ["sidenavForPersonalPage", "sidenavForPersonalPage2"].includes(this.sideBarId);

    if (isPersonalSideBar) {
      this.isSideBarOpen = window.innerWidth > 880;
      this.appSvc.isSideBarOpen.next(this.isSideBarOpen);
    }
  }



}
