import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-input-text-file',
  templateUrl: './input-text-file.component.html',
  styleUrls: ['./input-text-file.component.css']
})
export class InputTextFileComponent  {
@Input()text!:string;
@Input()iconClass!:string;
@Input()containerClass:string='containerClass10';
@Input()InputId:string="";
@Input()ImgId:string="";
@Input()arrayOfPics:string[]=[]
@Input()isInputFileNeeded=true;
@Input()isPicNeeded=false;

constructor(private appSvc:AppService){}

  uploadFileHandler() {
   this.appSvc.uploadFileHandler(this)
  }

}
