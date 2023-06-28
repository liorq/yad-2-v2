import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { step5CheckboxItems, step6Btns, step6Inputs, step6OptionBtnArray } from 'src/app/data/array';
import { iconSettings, step6FieldValidity } from 'src/app/data/objects';

@Component({
  selector: 'app-stage2step6',
  templateUrl: './stage2step6.component.html',
  styleUrls: ['./stage2step6.component.css']
})
export class Stage2step6Component {
  anotherPersonInfoNeeded=false;
  isNavigationRequested=false;
  isUserAgreedToTerms=false;
  fieldValidity=step6FieldValidity;
  checkboxItems = step5CheckboxItems;
  inputs = step6Inputs
  optionBtnArray=step6OptionBtnArray
  isUserAgreedToTerm=false
  btns=step6Btns
    constructor(private appSvc:AppService){}
 updateIsUserAgreedToTerms(){
  this.isUserAgreedToTerm=true;
 }


  formValidationHandler(){
    const fields=this.anotherPersonInfoNeeded?['name','phone','personName','personPhone','email']:['name','phone','email']
    this.fieldValidity= this.appSvc.getFormValues(...fields)
   }
   isFormValid(){
    return this.appSvc.isFormValid(this.fieldValidity)
   }
   navigate(){
    this.formValidationHandler()
    if(this.isFormValid()&&this.isUserAgreedToTerm)
    this.appSvc.navigate('publish/stage-2/step7')

   this.isNavigationRequested=true

  }

addAnotherPersonHandler(iconClass: string) {
  this.anotherPersonInfoNeeded=!this.anotherPersonInfoNeeded
  this.optionBtnArray.forEach(btn => btn.ngIf = !btn.ngIf);

  if (iconSettings.hasOwnProperty(iconClass))
    this.inputs[1].isInputContainerNeeded = iconSettings[iconClass][0];

}
}
