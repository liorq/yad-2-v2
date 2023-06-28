import { Component, Input, OnInit } from '@angular/core';
import { adDescriptionSidebarItems } from 'src/app/data/array';
import { getAdsArray, getItemColor } from 'src/app/data/functions';

@Component({
  selector: 'app-ad-description',
  templateUrl: './ad-description.component.html',
  styleUrls: ['./ad-description.component.css']
})
export class AdDescriptionComponent implements OnInit{
  @Input()textColor:string='black';
  @Input()ad:any;
    @Input()isMyAd!:boolean;

    ngObj:any;
  adsArray:any[]=[]
  sidebarItems = adDescriptionSidebarItems

  ngOnInit(): void {
    const {porch,parking,dateOfEntering,flexible}=this.ad;
   this.adsArray=getAdsArray(flexible,dateOfEntering,porch,parking)
  }

  getItemColor(item:any){
     return getItemColor(item,this.ad)
  }

}
