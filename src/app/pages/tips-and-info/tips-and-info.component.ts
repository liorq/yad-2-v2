import { Component, OnInit } from '@angular/core';
import { getCarNgClass, getHomeNgClass, getPropertySaleTipsArray, getTabsNgClass, getTipsAndInfoNgClass, getYad2NgClass } from 'src/app/data/functions';

@Component({
  selector: 'app-tips-and-info',
  templateUrl: './tips-and-info.component.html',
  styleUrls: ['./tips-and-info.component.css']
})
export class TipsAndInfoComponent implements OnInit {
ActiveBtn:string='home';
ngClass:any
ngClassForBtns:any;
carNgClass:any;
homeNgClass:any;
yad2NgClass:any;
tabs !:any[];
arrayOfData:any=[]
sentences: string[] = [
  "עסקה אונליין היא אחת ההמצאות המופלאות של המאה",
  "יחד עם זאת היא דורשת מאיתנו לשמור על ערנות",
  "בכל שלב בתהליך ואנחנו כאן כדי לעזור עם טיפים ודוגמאות"
];

titles: string[] = [
  "איך אפשר להימנע",
  "?מהונאות ברשת"
];




ngOnInit(){
  this.handleTabClick('home');
}
handleTabClick(word:string){
  this.ActiveBtn =word;
  this.ngClass = getTipsAndInfoNgClass(this.ActiveBtn);
  this.carNgClass = getCarNgClass(this.ActiveBtn);
  this.homeNgClass = getHomeNgClass(this.ActiveBtn);
  this.yad2NgClass =getYad2NgClass(this.ActiveBtn);
  this.tabs=getTabsNgClass(this.ActiveBtn,this.homeNgClass,this.carNgClass,this.yad2NgClass)
  this.arrayOfData=getPropertySaleTipsArray(this.ActiveBtn)

}

}


