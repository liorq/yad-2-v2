import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit{
  @Input()text!:string;
  @Input()inputClass!:string;
  @Input()textClass!:string;
  @Input()containerClass!:string;
  @Input()type:string='text';
  @Input()min:string='';
  @Input()placeHolder:string='';
  @Input()isInputDisabled!:boolean;
  @Input()isTextUnderInputExpected!:boolean;
  @Input()TextUnderInput!:string;
  @Input()ClassTextUnderInput?:string;
  @Input() PropertyName!:string;
  @Input() shouldUpdateAdSubject!:Boolean;
  @Input() shouldUpdateSearchAd!:Boolean;

   @Input() shouldUpdateSubUserRequest!:Boolean;

   inputVal!:string;
   constructor(private appSvc:AppService,
  ) { }
  ngOnInit(): void {
    this.inputVal=this.appSvc.getValueFromObject(this.PropertyName)
  }
  UpdateAdSubject(){
    if(this.shouldUpdateAdSubject){
      this.appSvc.updateAdUploadSubject({[this.PropertyName]:this.inputVal})
     console.log(this.appSvc.adUploadSubject.getValue())
    }
    if(this.shouldUpdateSearchAd){
      this.appSvc.updateSearchSubject({[this.PropertyName]:this.inputVal})
    }
    if(this.shouldUpdateSubUserRequest){
      this.appSvc.updateUserRequest({[this.PropertyName]:this.inputVal})

    }
  }

}
