import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { signInFormFields } from 'src/app/data/array';

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
  isNavigationRequested=false;
  isFieldsEmpty=false;
  password!: AbstractControl<any, any>;
  email!: AbstractControl<any, any>;
  confirmPassword!: AbstractControl<any, any>;
  @Input()formTypes!:string;
  constructor(private appSvc: AppService, private formBuilder: FormBuilder
,private dbSvc:DbService,
  ) {}

  togglePasswordVisibility(obj:any){
    obj.counter++;
    if(obj.counter==2)
      obj.counter=0;

  }

  form!: FormGroup;
   @Input()accountOptionsObj:any;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],

    });
    ({ email: this.email, password: this.password,confirmPassword:this.confirmPassword } =
      this.form.controls);
  }
  async authHandler(button:any){
    if (button.type == "connect") {
    const res: any = await (this.formTypes === 'SignUpForm' ? this.dbSvc.signUp(this.form.value) : this.dbSvc.signIn(this.form.value));
    this.setToken(res);
    const isValidToken=res?.error?.text;
    const isValidEnter=this.formTypes === 'SignInForm'&&isValidToken||this.formTypes === 'SignUpForm'&&isValidToken
    if(isValidEnter){
      localStorage.setItem("userName",this.email.value)
      this.appSvc.navigate('')
      }
    }
    const areFieldsInvalid=this.password.value.length==0||this.email.value.length==0
    this.isFieldsEmpty = areFieldsInvalid;
    this.isNavigationRequested = !areFieldsInvalid;
  }
 setToken(res:any){
   if(res?.error?.text)
      localStorage.setItem('token',res?.error?.text)
 }
}
