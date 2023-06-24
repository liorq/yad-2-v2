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
console.log(this.appSvc.searchSubject.getValue())
const res=await this.dbSvc.findApartments(this.appSvc.searchSubject.getValue())
this.addLastSearch()
console.log(res)
Array.isArray(res)&&this.appSvc.allAds.next(res)
  }
  
  addLastSearch(){
    ///getLastSearchData
  const {hasWindowBars,hasStorage,minSqm,maxSqm,isResidentialUnit,parking,hasFurniture,minPrice,maxPrice,hasAccessibilityForDisabled,hasCentralAirConditioning,hasElevator,minFloor,maxFloor}=this.appSvc.searchSubject.getValue()
  const newSearch ={
    title: 'נדל"ן - מכירה',
    link: '',
    details: [
      { label: 'מחיר', value: `${minPrice} - ${maxPrice}` },
      { label: 'גישה לנכים', value: hasAccessibilityForDisabled ? 'כן' : 'לא' },
      { label: 'מיזוג', value: hasCentralAirConditioning ? 'כן' : 'לא' },
      { label: 'מרפסת', value:hasElevator ? 'כן' : 'לא' },
      { label: 'סורגים', value: hasWindowBars ? 'כן' : 'לא'  },
      { label: 'מעלית', value: hasElevator ? 'כן' : 'לא'  },
      { label: 'קומה', value: `${minFloor} - ${maxFloor}` },
      { label: 'מרוהטת',value:  hasFurniture ? 'כן' : 'לא'},
      { label: 'חניה', value:  parking ? 'כן' : 'לא' },
      { label: 'ממ"ד', value: isResidentialUnit ? 'כן' : 'לא'  },
      { label: 'גודל דירה (במ"ר)', value: `${minSqm} - ${maxSqm}` },
      { label: 'מחסן', value: hasStorage ? 'כן' : 'לא'  },
    ],
    time: '12:00',
  };
  this.appSvc.AddToLastSearches(newSearch)
  }
}
