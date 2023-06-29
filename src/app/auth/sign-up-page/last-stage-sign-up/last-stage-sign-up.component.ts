import { Component } from '@angular/core';
import {   buttonsForSignUpLastStage, formFieldsForSignUpLastStage } from 'src/app/data/array';
import { titleContainerObjForSignUp, accountOptionsObjForSignUp } from 'src/app/data/objects';

@Component({
  selector: 'app-last-stage-sign-up',
  templateUrl: './last-stage-sign-up.component.html',
  styleUrls: ['./last-stage-sign-up.component.css','../sign-up/sign-up.component.css']
})
export class LastStageSignUpComponent {
  titleContainerObj=titleContainerObjForSignUp
  accountOptionsObj=accountOptionsObjForSignUp
  formFields = formFieldsForSignUpLastStage
   buttons =buttonsForSignUpLastStage
}
