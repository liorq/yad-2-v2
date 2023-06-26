import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
titleContainerObj={arrayOfContent:[{label:'',class:'halfRec'},{label:'היי,נעים להכיר',class:'title'}],containerClass:'title-container'}
accountOptionsObj={array:[{label:'להתחברות',class:'sign-up'},{label:'?כבר יש לך חשבון',class:'account'}],containerClass:'dont-have-account-container dont-have-account-sign-up',url:"signUp"};


formFields = [
  {
    label: 'מייל',
    name: 'email',
    type: 'text',
    placeholder: 'yourmail@example.com',
    passwordVisibilityObj:{counter:0}

  },
  {
    label: 'סיסמא',
    name: 'password',
    type: 'password',
    placeholder: 'הקלדת סיסמא',
    passwordVisibilityObj:{counter:0}

  },
  {
    label: 'אימות סיסמא',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'הקלדת סיסמא',
    passwordVisibilityObj:{counter:0}

  }
];
 buttons = [
  {type:'connect', containerClass: 'btn-connect btn-connect-for-sign-up', text: 'התחברות', iconClass: '' },
  {type:'google', containerClass: 'btn-google btn-google-for-sign-up', text: 'גוגל', iconClass: 'google-icon' },
  {type:'apple', containerClass: 'btn-apple btn-apple-for-sign-up', text: 'אפל', iconClass: 'apple-icon' },
];
}
