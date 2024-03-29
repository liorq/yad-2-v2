import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-advance-search-options',
  templateUrl: './advance-search-options.component.html',
  styleUrls: ['./advance-search-options.component.css']
})
export class AdvanceSearchOptionsComponent {
constructor(private appSvc :AppService,private dbSvc:DbService){}
 async findApartments(){
const res=await this.dbSvc.findApartments(this.appSvc.searchSubject.getValue())
this.addLastSearch()
const adsArray = Array.isArray(res) ? res : [];
this.appSvc.allAds.next(adsArray)
  }

  addLastSearch(){
  this.appSvc.addLastSearch()
  }
  cleanSearch(){
    location.reload()
  }
}
