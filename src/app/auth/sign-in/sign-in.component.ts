import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GovService } from 'src/app/core/services/gov.service';
import { buttonsForSignIn, formFieldsForSignIn } from 'src/app/data/array';
import { accountOptionsObjForSignIn } from 'src/app/data/objects';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  password!: AbstractControl<any, any>;
  userName!: AbstractControl<any, any>;
  constructor(
    private formBuilder: FormBuilder,
    private dbSvc:GovService
  ) {}
 buttons = buttonsForSignIn
accountOptionsObj=accountOptionsObjForSignIn
formFields = formFieldsForSignIn

  signInForm!: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
    ({ userName: this.userName, password: this.password } =
      this.signInForm.controls);
  }

}
