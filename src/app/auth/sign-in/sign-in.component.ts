import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GovService } from 'src/app/core/services/gov.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  password!: AbstractControl<any, any>;
  userName!: AbstractControl<any, any>;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dbSvc:GovService

  ) {}
 buttons = [
    {type:'connect', containerClass: 'btn-connect', text: 'התחברות', iconClass: '' },
    {type:'google', containerClass: 'btn-google', text: 'גוגל', iconClass: 'google-icon' },
    {type:'apple', containerClass: 'btn-apple', text: 'אפל', iconClass: 'apple-icon' },
  ];
accountOptionsObj={array:[{label:'להרשמה',class:'sign-up'},{label:'?אין לך חשבון',class:'account'}],containerClass:'dont-have-account-container'};

  formFields = [
    {
      label: 'מייל',
      name: 'email',
      type: 'text',
      placeholder: 'yourmail@example.com'
,    passwordVisibilityObj:{counter:0}

    },
    {
      label: 'סיסמא',
      name: 'password',
      type: 'password',
      placeholder: 'הקלדת סיסמא',
      passwordVisibilityObj:{counter:0}

    },

  ];

  signInForm!: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
    ({ userName: this.userName, password: this.password } =
      this.signInForm.controls);
  }

  async signInHandler() {
    // const form = await this.dbSvc.signInHandler(
    //   this.userName?.value,
    //   this.password?.value
    // );
    // if (form?.access_token) {
      // const [CoursesData, UsersData, attendees, myCourses] = await this.dbSvc.getAllTablesData()


      // this.router.navigate(["/my-courses"]);
    // }
  }
}
