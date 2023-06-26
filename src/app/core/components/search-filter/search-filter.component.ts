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
  const { withPrice, withPictures } = this.appSvc.adFilterSubject.getValue();

  if (withPrice){
    this.allAds = this.allAds.filter(a => a.price > 1);
    this.filterOptions[0].isChecked=!this.filterOptions[0].isChecked
  }
   if(withPictures){
    const allAdsHasPic=this.appSvc.adsHasPictures.getValue()||[]
     this.allAds = this.allAds.filter(a => allAdsHasPic.includes(a.apartmentId));
     this.filterOptions[1].isChecked=!this.filterOptions[1].isChecked

    }

  this.appSvc.allAds.next(this.allAds)
}
async restore(){
  this.filterOptions.forEach(option => {
    option.isChecked = false;
  });
  
}
}
