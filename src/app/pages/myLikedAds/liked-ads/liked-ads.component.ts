import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-liked-ads',
  templateUrl: './liked-ads.component.html',
  styleUrls: ['../no-liked-ads/no-liked-ads.component.css','./liked-ads.component.css']
})
export class LikedAdsComponent implements OnInit{
  constructor(private dbSvc:DbService){}
@Input()  allAds=[];
async ngOnInit() {
  ////FROM THE SERVER MY LIKED ADS
  const res:any = await this.dbSvc.getAllMyLikedAds();
  this.allAds = res.map((obj:any) => obj.apartment)|| [];
  console.log(res)
}
}
