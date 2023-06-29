import { Component, Input } from '@angular/core';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['../ad-description/ad-description.component.css','./home-info.component.css']
})
export class HomeInfoComponent {
@Input()ad!:apartment;
isReadMoreBtnActive=false;

openDis(){
  this.isReadMoreBtnActive=!this.isReadMoreBtnActive
}
}
