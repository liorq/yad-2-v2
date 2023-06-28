import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';
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

 @Input()ad:any;
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
  if(this.fatherComponent=='likedAds')
  return;

  this.stopProp(event)
  await this.updateCurrentImages();
  this.appSvc.navigate('/image-gallery')
}
async updateCurrentImages(){
  const pics=await this.dbSvc.getAllApartmentImages(this.ad.apartmentId.toUpperCase())
  if(Array.isArray(pics))
    this.pics=pics.map((p: any) => p.value);

   this.appSvc.currentAdImages.next(this.pics)
}

async isAdLikedByUser() {
  if(!this.appSvc.isUserLogged())
  return

  const res:any = await this.dbSvc.getAllMyLikedAds();
  this.myLikedMessages = res || [];
  if(Array.isArray(res))
  this.isUserLikedAd = !!res?.find((a: any) => a.apartment.apartmentId === this.ad.apartmentId);
}

isNumber(content: string): boolean {
  return /^₪?\d+(?: \₪?)?$/.test(content);
}
stopProp(event:Event){
  this.appSvc.preventEventPropagation(event)
}

////change the name of the function
async unlikeAd (event:Event){
  event.stopPropagation()
  const milliSeconds = (this.fatherComponent === 'likedAds') ? 10000 : 0;

setTimeout(async ()=>{
this.isUserLikedAd=!this.isUserLikedAd;
const {apartmentId}=this.ad
const res=await this.dbSvc.toggleLikedAdd(apartmentId,this.isUserLikedAd);
console.log(res)
},milliSeconds)

}
toggleAd(){
  this.isOpenAd=!this.isOpenAd
}
}
