import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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
constructor(private dbSvc:DbService,private appSvc:AppService){}
@Input()  allAds:apartment[]=[];

  async ngOnInit() {

    this.appSvc.allMyFavAds.subscribe((newData)=>{
      this.allAds=newData
    })
    ////FROM THE SERVER MY LIKED ADS
    const res:any = await this.dbSvc.getAllMyLikedAds();
    this.allAds = res?.map((obj:any) => obj?.apartment)|| [];

    if(res?.error?.text){
      const allAds = res?.map((obj:any) => obj?.apartment)|| [];
      this.appSvc.allMyFavAds.next(allAds);
    }










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
