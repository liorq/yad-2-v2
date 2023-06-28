import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { step3Btns, step3ButtonsWithIcons, step3Numbers, step3Options, step3SelectBoxes } from 'src/app/data/array';
import { step3FieldValidity } from 'src/app/data/objects';

@Component({
  selector: 'app-stage2step3',
  templateUrl: './stage2step3.component.html',
  styleUrls: ['./stage2step3.component.css']
})
export class Stage2step3Component  {
fieldValidity=step3FieldValidity;
options = step3Options;
numbers=step3Numbers;
selectBoxes = step3SelectBoxes;
btns=step3Btns;
buttonsWithIcons = step3ButtonsWithIcons;
isNavigationRequested=false;
constructor(private appSvc:AppService){}
navigate(){
  this.formValidationHandler()
  if(this.isFormValid())
    this.appSvc.navigate('publish/stage-2/step4')

  this.isNavigationRequested=true;
}
formValidationHandler(){
 this.fieldValidity= this.appSvc.getFormValues('roomNumber','parking','porch')
}
isFormValid(){
 const {des}=this.appSvc.adUploadSubject.getValue()||{}
 return des!?.length>=160&&this.appSvc.isFormValid(this.fieldValidity)
}

updateAdSubject(PropertyName:string,val:string|number,item:any){
item.choice=val;
if(val=="ללא"){
  val=0;
  item.choice=0
}
this.appSvc.updateAdUploadSubject({[PropertyName]:val})
}
}
