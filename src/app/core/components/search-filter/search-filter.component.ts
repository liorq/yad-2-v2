import { Component, Input, OnInit } from '@angular/core';
import { filterOptions } from 'src/app/data/array';
import { apartment } from 'src/app/data/interfaces';
import { AppService } from '../../services/app.service';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit{
  filterOptions=filterOptions;
 @Input() allAds!:apartment[];
ngOnInit(): void {
}
 constructor(private dbSvc:DbService,private appSvc:AppService){}
 async filterAds() {
  const ads:any = await this.dbSvc.getAllAds();

  if (ads && ads.length > 0) {
    this.appSvc.allAds.next(ads);
    this.allAds = ads;
  }

  const { withPrice, withPictures } = this.appSvc.adFilterByTypeSubject.getValue();

  if (withPrice)
    this.filterByPrice();
  if (withPictures)
    this.filterByPictures();

  if (!withPrice && !withPictures)
    this.restore();

  this.appSvc.allAds.next(this.allAds);
}
async restore(){
  location.reload()
}
private filterByPrice() {
  this.allAds = this.allAds.filter(ad => ad.price > 1);
  this.filterOptions[0].isChecked = true;
}

private filterByPictures() {
  const allAdsHasPic = this.appSvc.adsHasPictures.getValue() || [];
  this.allAds = this.allAds.filter(ad => allAdsHasPic.includes(ad.apartmentId));
  this.filterOptions[1].isChecked = true;
}
}
