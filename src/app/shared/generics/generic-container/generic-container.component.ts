import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-generic-container',
  templateUrl: './generic-container.component.html',
  styleUrls: ['./generic-container.component.css','../../../auth/sign-in/sign-in.component.css']
})
export class GenericContainerComponent {
@Input()containerClass!:string;
@Input()arrayOfContent!:any[];
@Input()url!:string;
@Input()isInsideGenericForm!:boolean;
constructor(private appSvc:AppService){}
navigate(){
  if(this.isInsideGenericForm)
   this.appSvc.navigate(this.url)
}
}
