import {Component, Input} from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-radio-btns',
  templateUrl: './radio-btns.component.html',
  styleUrls: ['./radio-btns.component.scss']
})
export class RadioBtnsComponent {
  favoriteOption!: string;
 @Input() allAds:apartment[]=[]
 @Input() options = [{hebrew:'לפי תאריך',english:'date'}, {hebrew:'מחיר-מהזול ליקר',english:'priceLowToHigh'}, {hebrew:'מחיר-מהיקר לזול',english:'priceHighToLow'}];
constructor(private appSvc:AppService){}

arrangeAdsBy(parameter: string) {
  this.allAds =this.appSvc.arrangeAdsBy(parameter,this.allAds)
  this.appSvc.updateSubject(this.appSvc.allAds,this.allAds)
}

}
