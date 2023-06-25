import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['../../auth/sign-in/sign-in.component.css','./btn.component.css']
})
export class BtnComponent implements OnInit{
@Input()text!:string;
@Input()iconClass!:string;
@Input()textClass!:string;
@Input()containerClass!:string;
@Input() PropertyName!:string;
@Input() shouldUpdateAdSubject!:Boolean;
@Input()containerCheckedClass='';
isChecked:boolean=false;
ngClass:any;
constructor(private appSvc:AppService){}
ngOnInit(): void {
     this.isChecked=this.appSvc.getValueFromObject(this.PropertyName)
  this.ngClass={[this.containerCheckedClass]:this.isChecked}
}
handleButtonClick(){
  this.ngClass={[this.containerCheckedClass]:this.isChecked}

  setTimeout(()=>{
    this.isChecked=!this.isChecked
    this.ngClass={[this.containerCheckedClass]:this.isChecked}
    if(this.shouldUpdateAdSubject){
      this.appSvc.updateAdUploadSubject({[this.PropertyName]:this.isChecked})
    }
  })
}
}
