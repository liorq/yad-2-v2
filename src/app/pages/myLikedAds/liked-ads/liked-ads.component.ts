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
  @Input()  allAds:apartment[]=[];
  @Input()  allLikedAdsId:string[]=[];
  @Input()  allComments:string[]=[];
  isModalOpen=true;
  constructor(private appSvc:AppService){}
  ngOnInit(): void {
    this.appSvc.currentAdOpen.subscribe(()=>{
      this.isModalOpen=!this.isModalOpen;
      console.log(this.isModalOpen)
    })
  }
}
