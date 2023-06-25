import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import {  GovService } from 'src/app/core/services/gov.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-input-text',
  templateUrl: './search-input-text.component.html',
  styleUrls: ['./search-input-text.component.css']
})
export class SearchInputTextComponent implements OnInit{
@Input()inputClass!:string;
  constructor(private appSvc:AppService,public dbSvc:GovService,private router:Router,private AppSvc:AppService){}
/////search inputs with word cities and streets
address:any;
ngOnInit(): void {
  this.address={
    street:this.appSvc.getValueFromObject('street'),
    city:this.appSvc.getValueFromObject('city')
  }
}
updateAddress(){
 this.AppSvc.updateAdUploadSubject(this.address)
}
}


