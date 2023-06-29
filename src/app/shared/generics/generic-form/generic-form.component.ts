import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { CheckboxItemsForSignUpLastStage, signInFormFields, step5CheckboxItems } from 'src/app/data/array';
import { HttpResponse } from 'src/app/data/interfaces';
import { NavigationObj } from 'src/app/data/objects';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['../../../auth/sign-in/sign-in.component.css','./generic-form.component.css']
})
export class GenericFormComponent {
  @Input()titleContainerObj={arrayOfContent:[{label:'',class:'halfRec'},{label:'היי, טוב לראות אותך',class:'title'}],containerClass:'title-container'};
  @Input()formFields = signInFormFields;
  @Input() buttons!:any[] ;
  @Input() url:string="signUp" ;

  @Input()isSignInForm!:boolean;
  checkboxItems = CheckboxItemsForSignUpLastStage;

  isNavigationRequested=false;
  isFieldsEmpty=false;
  password!: AbstractControl<any, any>;
  email!: AbstractControl<any, any>;
  confirmPassword!: AbstractControl<any, any>;
  firstName!: AbstractControl<any, any>;
  lastName!: AbstractControl<any, any>;
  phoneNumber!: AbstractControl<any, any>;
  @Input()formTypes!:string;
  constructor(private appSvc: AppService, private formBuilder: FormBuilder
,private dbSvc:DbService,
  ) {}

  togglePasswordVisibility(obj:{counter:number}){
    obj.counter=(obj.counter+1)%2
  }

  form!: FormGroup;
   @Input()accountOptionsObj:any;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      lastName: ["", Validators.required],
      firstName: ["", Validators.required],

    });
    ({ email: this.email, password: this.password,confirmPassword:this.confirmPassword } =
      this.form.controls);
  }
  async authHandler(button:{type:string}){
    const isSignUpForm=this.formTypes === 'SignUpForm';
    const isSignInForm=this.formTypes === 'SignInForm';
    const isSignInLastStageForm=this.formTypes === 'SignUpFormLastStage';
    const isUserRequiredEntering=button.type == "connect"

    this.updateSubject(isSignUpForm,isSignInForm)
    if (isUserRequiredEntering&&(isSignInForm||isSignInLastStageForm)) {
    const method = isSignInLastStageForm ? 'signUp' : 'signIn';

    ////getFormValue(){}
    let form=this.form.value
    if(isSignInLastStageForm){
      this.appSvc.updateSignUpSubject(this.form.value)
       form=this.appSvc.signUpObj.getValue()
     }
    const res: any = await this.dbSvc[method](form);
    this.setToken(res);
    const isValidToken=res?.error?.text;
    const isValidEnter=(isSignInForm&&isValidToken)||(isSignUpForm)||(isSignInLastStageForm&&isValidToken)


    }
    ////the field need to be diffrent! change that
    const areFieldsInvalid=this.password?.value.length==0||this.email?.value.length==0;
    const areFieldsLastSignUpInvalid=this.phoneNumber?.value.length==0||this.firstName?.value.length==0||this.lastName?.value.length==0;

    [this.isFieldsEmpty, this.isNavigationRequested] = [areFieldsInvalid, !(areFieldsInvalid)];
    if(!this.isFieldsEmpty){
      localStorage.setItem("userName",this.email?.value)
      this.appSvc.navigate(NavigationObj[this.formTypes])
      }
  }
 setToken(res:HttpResponse){
   if(res?.error?.text)
      localStorage.setItem('token',res?.error?.text)
 }
 deleteField(){

 }
 getFormValue(isSignInLastStageForm: boolean) {
  const form = isSignInLastStageForm ? this.appSvc.signUpObj.getValue() : this.form.value;
  if (isSignInLastStageForm) {
    this.appSvc.updateSignUpSubject(this.form.value);
  }
  return form;
}


    updateSubject(isSignUpForm:boolean,isSignInForm:boolean){
      if(isSignInForm)return


    const objSignUp={email:this.email?.value,password:this.password?.value}
      const objLastStageSignUp={firstName:this.firstName?.value,lastName:this.lastName?.value,phoneNumber:this.phoneNumber?.value}

      this.appSvc.updateSignUpSubject(isSignUpForm?objSignUp:objLastStageSignUp)

    }

}
