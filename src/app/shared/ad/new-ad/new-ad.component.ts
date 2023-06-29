import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { initDataForAd } from 'src/app/data/functions';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})
export class NewAdComponent implements OnInit{
  isUserLikedAd!:boolean;
  isOpenAd!:boolean;
@Input()isMyAd:boolean=false;
@Input()ad!:apartment;
@Input()isToggleAdNeeded:boolean=true;
@Input()isRemovePopUpOpen:boolean=false;
@Output() isUserRemoveLike= new EventEmitter<apartment>();
@Input()fatherComponent!:string;
@Input()classContainer!:string;
@Input()isTopAds=false;
 pics:string[]=[]
adsArray:any[]=[]
topColumn:any[] = [];
myLikedMessages!:any[]
constructor(public appSvc:AppService,public dbSvc:DbService){}

async ngOnInit() {
  const pics=await this.dbSvc.getAllApartmentImages(this.ad.apartmentId.toUpperCase())
    if(Array.isArray(pics)){
      this.pics=pics.map((p: any) => p.value);
      pics?.length>0&& this.appSvc.updateAdsHasPicturesSubject(this.ad.apartmentId)
    }
  await this.isAdLikedByUser();

  const {adsArray,topColumn}=initDataForAd(this.ad)
  this.adsArray=adsArray
  this.topColumn = topColumn
}
async openModal() {
  await this.updateCurrentImages();
  this.fatherComponent === "likedAds" && this.appSvc.currentAdOpen.next(this.ad);
}
removeLike() {
  this.isUserRemoveLike.emit(this.ad);
}
async navigateToImageGallery(event:Event){
 await this.appSvc.navigateToImageGallery(event,this)
}
async updateCurrentImages(){
await this.appSvc.updateCurrentImages(this)
}
async isAdLikedByUser() {
  await this.appSvc.isAdLikedByUser(this);
}
isNumber(content: string): boolean {
  return /^₪?\d+(?: \₪?)?$/.test(content);
}
stopProp(event:Event){
  this.appSvc.preventEventPropagation(event)
}
async unlikeAd (event:Event){
  await this.appSvc.unlikeAd (event,this)
}
toggleAd(){
  this.isOpenAd=!this.isOpenAd
}
}
