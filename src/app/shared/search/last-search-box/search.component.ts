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

ngOnInit(): void {
  this.searches=  this.appSvc.getLastSearches()
}
removeSearch(index:number,endPoint:number){
this.searches.splice(index,endPoint)
this.appSvc.setLastSearches(this.searches)
}
 checkUndefined(value:number|string, defaultValue:number|string,label:string) {
  const array=["מחיר",'גודל דירה (במ"ר)','קומה']
  if(array.includes(label)&&value=="undefined - undefined"){
    defaultValue="0-0"
  }

  return  value === "undefined" ? value : defaultValue;
}
}
