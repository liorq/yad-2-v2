import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  @Input()isSignInForm!:boolean;
  isNavigationRequested=false;
  isFieldsEmpty=false;
  password!: AbstractControl<any, any>;
  email!: AbstractControl<any, any>;
  confirmPassword!: AbstractControl<any, any>;
  @Input()formTypes!:string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
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
    console.log(this.formTypes)
    if (button.type == "connect") {
      let res: any = await (this.formTypes === 'SignUpForm' ? this.dbSvc.signUp(this.form.value) : this.dbSvc.signIn(this.form.value));
      this.setToken(res);
     const isValidToken=res?.error?.text;
      if(this.formTypes === 'SignInForm'&&isValidToken){
       this.router.navigate([''])
      }
      else if(this.formTypes === 'SignUpForm'&&isValidToken){
        this.router.navigate([''])
      }
    }

    ////logic of fields
    const areFieldsInvalid=this.password.value.length==0||this.email.value.length==0
    if(areFieldsInvalid){
      this.isFieldsEmpty=true;
      this.isNavigationRequested=false;
    }
    else{
      this.isNavigationRequested=true;
      this.isFieldsEmpty=false;
    }
  }
 setToken(res:any){
   if(res?.error?.text)
      localStorage.setItem('token',res?.error?.text)
 }
  async signInHandler() {

  }
  async signUpHandler() {

  }
}
