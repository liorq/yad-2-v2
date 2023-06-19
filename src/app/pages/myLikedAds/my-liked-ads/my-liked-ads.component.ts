import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-my-liked-ads',
  templateUrl: './my-liked-ads.component.html',
  styleUrls: ['./my-liked-ads.component.css']
})
export class MyLikedAdsComponent implements OnInit{
  constructor(private dbSvc:DbService,private appSvc:AppService){}
@Input()  allAds:apartment[]=[];
async ngOnInit() {
  this.appSvc.allMyFavAds.subscribe((newData)=>{
    this.allAds=newData
  })
  ////FROM THE SERVER MY LIKED ADS
  const res:any = await this.dbSvc.getAllMyLikedAds();
  console.log("hello")
  if(Array.isArray(res)){
    const allAds = res?.map((obj:any) => obj?.apartment)|| [];
    this.appSvc.allMyFavAds.next(allAds);

  }
}
}
