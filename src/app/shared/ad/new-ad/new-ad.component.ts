import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})
export class NewAdComponent implements OnInit{
  isUserLikedAd!:boolean;
  isOpenAd!:boolean;
  @Input()isMyAd:boolean=false
 @Input()ad:any;
 @Input()isToggleAdNeeded:boolean=true;
@Input()isRemovePopUpOpen:boolean=false;
@Output() isUserRemoveLike: EventEmitter<boolean> = new EventEmitter<boolean>();
@Input()fatherComponent!:string;
 @Input()classContainer!:string
adsArray:any[]=[]
topColumn:any[] = [];
myLikedMessages!:any[]
constructor(private dbSvc:DbService){}
async ngOnInit() {

 await this.isAdLikedByUser();
  const { totalFloorInBuilding, floor,roomNumber,price, street,houseNumber,typeOfProperty,city } = this.ad;

  this.adsArray=[

    {num:totalFloorInBuilding,text:'מ"ר'},
    {num:floor,text:'קומה'},
    {num:roomNumber,text:'חדרים'},
  ]

  this.topColumn = [
    {  content: `${price} ₪` },
    {  content: `${street} ${houseNumber}` },
    { content: `${typeOfProperty}, ${city}  ${city}` },
  ];
}
removeLike() {

console.log("hi")
  this.isUserRemoveLike.emit(true);
}
async isAdLikedByUser() {
  const res:any = await this.dbSvc.getAllMyLikedAds();
  this.myLikedMessages = res || [];
  if(Array.isArray(res))
  this.isUserLikedAd = !!res?.find((a: any) => a.apartment.apartmentId === this.ad.apartmentId);
}




isNumber(content: string): boolean {
  return /^₪?\d+(?: \₪?)?$/.test(content);
}
stopProp(event:Event){
  event.stopPropagation()
}

////change the name of the function
async onClick(event:Event){
  event.stopPropagation()
this.isUserLikedAd=!this.isUserLikedAd;

const {apartmentId}=this.ad
const res=await this.dbSvc.toggleLikedAdd(apartmentId,this.isUserLikedAd);
console.log(res)
if(this.fatherComponent=='likedAds'){
  ////remove this from the subject
  console.log("koko")
}
}
toggleAd(){
  this.isOpenAd=!this.isOpenAd

}
}
