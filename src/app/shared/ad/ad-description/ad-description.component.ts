import { Component, Input, OnInit } from '@angular/core';
import { adDescriptionSidebarItems } from 'src/app/data/array';
import { getAdsArray } from 'src/app/data/functions';

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
     const {hasAirConditioning,
      hasWindowBars,
      hasElevator,
      hasKosherKitchen,
      hasSolarHeater,
      hasAccessibilityForDisabled,
      isRenovated,
      isSmartHome,
      hasStorage,
      hasCentralAirConditioning,
      hasFurniture,
      isResidentialUnit,}=this.ad;
    const ngObj:any = {
      snow: hasAirConditioning,
      table: hasWindowBars,
      elevator: hasElevator,
      sink: hasKosherKitchen,
      solar: hasSolarHeater,
      wheelchair: hasAccessibilityForDisabled,
      brush: isRenovated,
      home: isSmartHome,
      graze: hasStorage,
      'air-con': hasCentralAirConditioning,
      furniture: hasFurniture,
      'home-icon': isResidentialUnit,
      flexible: ''
    };

 return ngObj[item?.title?.iconPathClass]
  }




}
