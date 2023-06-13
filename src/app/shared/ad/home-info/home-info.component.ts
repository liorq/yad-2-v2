import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['../ad-description/ad-description.component.css','./home-info.component.css']
})
export class HomeInfoComponent {
@Input()ad:any;
isReadMoreBtnActive=false;

openDis(){
  this.isReadMoreBtnActive=!this.isReadMoreBtnActive
  console.log("hello",this.isReadMoreBtnActive)
}
}
