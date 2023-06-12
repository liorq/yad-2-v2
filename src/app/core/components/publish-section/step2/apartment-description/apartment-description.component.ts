import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { apartmentButtons } from 'src/app/data/array';
import { getUpdatedLoaderData } from 'src/app/data/functions';

@Component({
  selector: 'app-apartment-description',
  templateUrl: './apartment-description.component.html',
  styleUrls: ['./apartment-description.component.css','../stage2step3/stage2step3.component.css']
})
export class ApartmentDescriptionComponent implements OnInit{
  constructor(private router:Router,private appSvc:AppService){}
  textBoxValue:string='';
  calcLoaderValue=0;
btns=apartmentButtons;
textLoaderArray:any=this.updateLoaderData();
ngOnInit(): void {
   this.textBoxValue=this.appSvc.getValueFromObject('des')||""
   this.updateLoaderData()
   this.getTextLength()
}
getTextLength(): number {
  this.calcLoaderValue = Math.min(this.textBoxValue.length / 1.5, 100);
  return this.textBoxValue.length;
}

updateLoaderData(){
  this.textLoaderArray=getUpdatedLoaderData(this.textBoxValue)
}
updateAdSubject(){
this.appSvc.updateAdUploadSubject({des:this.textBoxValue})
console.log(this.appSvc.adUploadSubject.getValue())
}
}
