import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-route-to-choose',
  templateUrl: './route-to-choose.component.html',
  styleUrls: ['./route-to-choose.component.css']
})
export class RouteToChooseComponent {
@Input()title!:string;
@Input()classTopImage!:string;
@Input()isHighlyRecommended!:boolean;
@Input()objPriceAndDays!:{[key: string]: string};
@Input()textBtn!:string;
@Input()classBtn:string='vipBtnContainer';
@Input()arrayOfData!:any[];
constructor(private dbSvc:DbService,private appSvc:AppService){}
async publishAdd(textBtn:string){
const isAdPromoted=textBtn=="המסלול המומלץ"
let ad=this.appSvc.adUploadSubject.getValue()
if(ad){
ad!.category='sale'
ad.isPromoted=isAdPromoted;
await this.dbSvc.addAd(ad)
this.appSvc.navigate('publish/stage-2/final')
}
}
}
