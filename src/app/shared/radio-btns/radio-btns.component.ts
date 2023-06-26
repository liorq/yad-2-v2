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
constructor(private dbSvc:DbService,private appSvc:AppService){}

sortByParameter(parameter: string) {
  console.log(this.allAds);
  this.allAds = this.allAds.sort((a: Record<string, any>, b: Record<string, any>) => {
    return parameter === 'date' ? Date.parse(a['dateOfEntering']) - Date.parse(b['dateOfEntering'])
      : parameter === 'priceHighToLow' ? b['price'] - a['price']
      : parameter === 'priceLowToHigh' ? a['price'] - b['price']
      : 0;
  });

  this.appSvc.updateSubject(this.appSvc.allAds,this.allAds)

  // this.appSvc.allAds.next(this.allAds);
}

}
