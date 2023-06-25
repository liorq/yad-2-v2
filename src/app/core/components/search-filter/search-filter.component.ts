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
  const { withPrice, withPictures, business } = this.appSvc.adFilterSubject.getValue();
  if (withPrice) this.allAds = this.allAds.filter(a => a.price > 1);
  this.appSvc.updateSubject(this.appSvc.allAds,this.allAds)

}


}
