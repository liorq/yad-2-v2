import { Component } from '@angular/core';
import { buttonsForSignUp, formFieldsForSignUp } from 'src/app/data/array';
import { accountOptionsObjForSignUp, titleContainerObjForSignUp } from 'src/app/data/objects';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
titleContainerObj=titleContainerObjForSignUp
accountOptionsObj=accountOptionsObjForSignUp
formFields = formFieldsForSignUp
 buttons =buttonsForSignUp
}
