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
  const res:any = await this.dbSvc.getAllAds();
  if (res && res.length>0){
    this.appSvc.allAds.next(res)
      this.allAds = res;
  }
  const { withPrice, withPictures } = this.appSvc.adFilterByTypeSubject.getValue();
  if (withPrice)
    this.allAds = this.allAds.filter(a => a.price > 1);
   if(withPictures){
    const allAdsHasPic=this.appSvc.adsHasPictures.getValue()||[]
     this.allAds = this.allAds.filter(a => allAdsHasPic.includes(a.apartmentId));
    }
    if(!withPrice&&!withPictures)
    this.restore()

  this.appSvc.allAds.next(this.allAds)
}
async restore(){
  location.reload()

}
}
