import { Component, Input } from '@angular/core';
import { filterOptions } from 'src/app/data/array';
import { apartment } from 'src/app/data/interfaces';
import { AppService } from '../../services/app.service';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  filterOptions=filterOptions;
 @Input() allAds!:apartment[];
 constructor(private dbSvc:DbService,private appSvc:AppService){}
 filterAds() {
  const { withPrice, withPictures } = this.appSvc.adFilterSubject.getValue();

  if (withPrice)
   this.allAds = this.allAds.filter(a => a.price > 1);
   if(withPictures){
    const allAdsHasPic=this.appSvc.adsHasPictures.getValue()||[]
     this.allAds = this.allAds.filter(a => allAdsHasPic.includes(a.apartmentId));
     console.log(this.allAds)
     console.log(allAdsHasPic)

   }

  this.appSvc.allAds.next(this.allAds)

}


}
