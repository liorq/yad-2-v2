import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { Search } from 'src/app/data/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private appSvc:AppService){}
  searches!:Search[]
  //  searches = [
  //   {
  //     title: 'נדל"ן - מכירה',
  //     link: '',
  //     details: [
  //       { label: 'מחיר', value: '0 - 1,000,000' },
  //       { label: 'גישה לנכים', value: 'כן' },
  //       { label: 'מיזוג', value: 'כן' },
  //       { label: 'מרפסת', value: 'כן' },
  //       { label: 'סורגים', value: 'כן' },
  //       { label: 'מעלית', value: 'כן' },
  //       { label: 'קומה', value: '0 - 1' },
  //       { label: 'מרוהטת', value: 'כן' },
  //       { label: 'חניה', value: 'כן' },
  //       { label: 'ממ"ד', value: 'כן' },
  //       { label: 'גודל דירה (במ"ר)', value: '0 - 10000' },
  //       { label: 'מחסן', value: 'כן' },
  //     ],
  //     time: '12:00',
  //   },
  //   // Add more search objects as needed
  // ];
ngOnInit(): void {
  this.searches=  this.appSvc.getLastSearches()
}
removeSearch(index:number,endPoint:number){
this.searches.splice(index,endPoint)
this.appSvc.setLastSearches(this.searches)
}
 checkUndefined(value:number|string, defaultValue:number) {
  return typeof value !== "undefined" ? value : defaultValue;
}
}
