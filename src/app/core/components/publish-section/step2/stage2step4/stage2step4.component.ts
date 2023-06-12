import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { step4Btns, step4Checkboxes, step4Inputs } from 'src/app/data/array';
import { getCurrentDay } from 'src/app/data/functions';
import { step4FieldValidity } from 'src/app/data/objects';

@Component({
  selector: 'app-stage2step4',
  templateUrl: './stage2step4.component.html',
  styleUrls: ['./stage2step4.component.css']
})
export class Stage2step4Component   {

  checkboxes=step4Checkboxes
  btns=step4Btns
  inputs = step4Inputs
  isNavigationRequested=false;
  fieldValidity=step4FieldValidity
  constructor(private router:Router,private appSvc:AppService){}


  formValidationHandler(){
    this.fieldValidity= this.appSvc.getFormValues('builtUpArea','totalSquareFootage','price','dateOfEntering')
   }
   isFormValid(){
    return this.appSvc.isFormValid(this.fieldValidity)
   }


   navigate(){

    this.formValidationHandler()
    if(this.isFormValid()){
      this.router.navigate(['publish/stage-2/step5'])
    }
    this.isNavigationRequested=true;
   console.log(this.fieldValidity)

  }
getCurrentDay(){
return getCurrentDay()
}

}
