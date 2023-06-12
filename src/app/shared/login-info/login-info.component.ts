import { Component } from '@angular/core';
import { loginArray } from 'src/app/data/array';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent {
   loginArray = loginArray



}
