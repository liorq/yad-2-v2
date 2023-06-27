import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { headerIcons } from 'src/app/data/array';
import { apartment } from 'src/app/data/interfaces';

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
constructor(private router:Router,private dbSvc:DbService,private appSvc:AppService){}
@Input()  allAds:apartment[]=[];

  async ngOnInit() {
    this.isUserLogged=this.appSvc.isUserLogged();
    console.log(this.isUserLogged)

    this.appSvc.allMyFavAds.subscribe((newData)=>{
      this.allAds=newData
    })

    if(!this.isUserLogged){
     return;
    }
    const res:any = await this.dbSvc.getAllMyLikedAds();
    this.allAds = res?.map((obj:any) => obj?.apartment)|| [];

    if(res?.error?.text){
      const allAds = res?.map((obj:any) => obj?.apartment)|| [];
      this.appSvc.allMyFavAds.next(allAds);
    }
}
navigate(val:string){
  this.router.navigate([`/${val}`])
}
toggleSideBar(){
  this.appSvc.updateSubject(this.appSvc.isSideBarOpen,!this.isSideBarOpen)

}
getSvgClass(obj:any){
console.log(obj);
}
getNumOfAlerts(type:string){
return this.appSvc.getNumOfAlerts(type)

}

}
