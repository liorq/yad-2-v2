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
  @Input()  isCommentRemoved:boolean[]=[];
  @Input()  isUserMissedUnlike:boolean[]=[];
  isModalOpen=true;
  constructor(private appSvc:AppService){}
  ngOnInit(): void {
    this.appSvc.currentAdOpen.subscribe(()=>{
      this.isModalOpen=!this.isModalOpen;
    })
    this.isCommentRemoved = Array(this.allComments.length).fill(false);
    this.isUserMissedUnlike = Array(this.allComments.length).fill(false);
  }
  removedLike(index:number){
    this.isCommentRemoved[index]=!this.isCommentRemoved[index]
   setTimeout(()=>{
    this.isUserMissedUnlike[index]=!this.isUserMissedUnlike[index]

   },10000)
  }
}
