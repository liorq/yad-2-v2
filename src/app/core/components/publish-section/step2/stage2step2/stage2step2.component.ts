import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { GovService } from 'src/app/core/services/gov.service';
import { step2Btns, step2Inputs, step2Options, step2SecondaryOptions, step2SelectBoxes, step2TextBoxes } from 'src/app/data/array';
import { step2FieldValidity } from 'src/app/data/objects';

@Component({
  selector: 'app-stage2step2',
  templateUrl: './stage2step2.component.html',
  styleUrls: ['./stage2step2.component.css']
})
export class Stage2step2Component implements OnInit{
isNavigationRequested=false;
fieldValidity=step2FieldValidity;
options = step2Options;
secondaryOptions=step2SecondaryOptions;
btns=step2Btns;
selectBoxes = step2SelectBoxes;
textBoxes = step2TextBoxes;
inputs = step2Inputs;
constructor(public dbSvc:GovService,private appSvc:AppService){}
async ngOnInit() {
  await this.dbSvc.getCities()
  }
  
  navigate(){
    this.formValidationHandler()
   if(this.appSvc.isFormValid(this.fieldValidity))
    this.appSvc.navigate('publish/stage-2/step3')

    this.isNavigationRequested=true;
  }

  formValidationHandler(){
     this.fieldValidity=this.appSvc.getFormValues('totalFloorInBuilding','city','street','houseNumber','floor','typeOfProperty','conditionOfProperty')
  }

}
