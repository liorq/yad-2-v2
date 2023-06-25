import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import {  filterItems } from 'src/app/data/array';


@Component({
  selector: 'app-saved-ads',
  templateUrl: './saved-ads.component.html',
  styleUrls: ['./saved-ads.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SavedAdsComponent implements OnInit {
  myAds:any[]|any=[null];
  i=0
  filterItems = filterItems
  isDropDownOpen=[false,false];
  constructor(private dbSvc:DbService,private appSvc:AppService){}
  async ngOnInit() {
    this.appSvc.allMyAds.subscribe((allMyAds)=>{
      this.myAds=allMyAds
    })
    const res: any = await this.dbSvc.getAllMyAds();
    if (res && res.length > 0) {
      this.myAds = res;
      this.appSvc.allMyAds.next(this.myAds);
    }
  }
  toggleBtn(num:number){
    this.isDropDownOpen = this.isDropDownOpen.map((value, index) => index === num ? !value : false);
  }
}
