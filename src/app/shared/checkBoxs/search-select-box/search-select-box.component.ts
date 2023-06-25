import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-search-select-box',
  templateUrl: './search-select-box.component.html',
  styleUrls: ['./search-select-box.component.css']
})
export class SearchSelectBoxComponent {
@Input()array!:any[];
@Input()shouldUpdateSearchAd!:boolean;
@Input()PropertyName!:string;
currentVal="0";

constructor(private appSvc:AppService){}
onChange(){

  this.shouldUpdateSearchAd && this.appSvc.updateSearchSubject({ [this.PropertyName]: this.currentVal });
}
}
