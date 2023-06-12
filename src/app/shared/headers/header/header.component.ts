import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { headerIcons } from 'src/app/data/array';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit{
  isSideBarOpen!:boolean;
  @Input()isTopLineNeeded!:boolean;
  @Input() icons = headerIcons;
  @Input() text = 'תפריט';
  @Input() textClass = 'text';
  isUserLogged!:boolean;
  @Input() logoClass = '';
  @Input() heartClass = 'leftSideHeart';
  @Input() messageClass = 'leftSideMessage';
  @Input()isTopBarNeeded!:boolean;
constructor(private appSvc:AppService){}
ngOnInit(): void {

this.appSvc.isSideBarOpen.subscribe((newStatus)=>{
  this.isSideBarOpen=newStatus;
})
this.isUserLogged=this.appSvc.isUserLogged();
console.log(this.isUserLogged)
}
toggleSideBar(){
  this.appSvc.updateSubject(this.appSvc.isSideBarOpen,!this.isSideBarOpen)

}
getSvgClass(obj:any){
console.log(obj);
}


}
