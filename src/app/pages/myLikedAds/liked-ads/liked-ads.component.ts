import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-liked-ads',
  templateUrl: './liked-ads.component.html',
  styleUrls: ['../no-liked-ads/no-liked-ads.component.css','./liked-ads.component.css']
})
export class LikedAdsComponent implements OnInit{
  constructor(private dbSvc:DbService,private appSvc:AppService){}
@Input()  allAds:apartment[]=[];
async ngOnInit() {
  this.appSvc.allMyFavAds.subscribe((newData)=>{
    this.allAds=newData
  })
  ////FROM THE SERVER MY LIKED ADS
  const res:any = await this.dbSvc.getAllMyLikedAds();
  
  if(res?.error?.text){
    const allAds = res?.map((obj:any) => obj?.apartment)|| [];
    this.appSvc.allMyFavAds.next(allAds);

  }
}
}
