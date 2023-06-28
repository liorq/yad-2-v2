import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { searchColumnsRooms, searchItems } from 'src/app/data/array';

@Component({
  selector: 'app-search-columns',
  templateUrl: './search-columns.component.html',
  styleUrls: ['./search-columns.component.css']
})
export class SearchColumnsComponent {
isBtnRoomsOpen:boolean=false;
searchColumnsRooms =searchColumnsRooms
searchItems = searchItems
isAdvanceSearchOpen:boolean=false;
isDropDownOpen=[false,false]
constructor(private appSvc :AppService,private dbSvc:DbService){}
 async findApartments(){
const res=await this.dbSvc.findApartments(this.appSvc.searchSubject.getValue())
this.addLastSearch()
const adsArray = Array.isArray(res) ? res : [];
this.appSvc.allAds.next(adsArray)


  }
 getNumOfAdvanceFilters(){
  const count = Object.values(this.appSvc.searchSubject.getValue()).filter(value => value === true).length;
  if(count==0)
  return "";
  return "("+count+")";

 }
  addLastSearch(){
  this.appSvc.addLastSearch()
  }
}
