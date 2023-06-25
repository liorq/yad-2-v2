import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit{
@Input()selectedOption:any;
@Input() options!:any[];
@Input()text!:string;
@Input()textClass!:string;
@Input()ContainerClass!:string;
@Input()objName!:string;
@Input()selectBoxObj!:{};
@Input()shouldUpdateAdSubject!:boolean;
constructor(private appSvc:AppService){}
ngOnInit(): void {
    this.selectedOption=this.appSvc.getValueFromObject(this.objName)
}
onClick(){
 if(this.shouldUpdateAdSubject){
  this.appSvc.updateAdUploadSubject({ [this.objName]: this.selectedOption })
 }
}
}
