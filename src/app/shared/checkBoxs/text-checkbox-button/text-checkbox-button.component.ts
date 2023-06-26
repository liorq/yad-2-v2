import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-text-checkbox-button',
  templateUrl: './text-checkbox-button.component.html',
  styleUrls: ['./text-checkbox-button.component.css']
})
export class TextCheckboxButtonComponent implements OnInit{
@Input() text!:string;
@Input() containerClass!:string;
@Input() textClass!:string;

@Input() isChecked:boolean=false;
@Input() PropertyName!:string;
@Input() shouldUpdateAd!:Boolean;
@Input() shouldUpdateFilterAd!:Boolean;
@Input() shouldUpdateSearchAd!:Boolean;
@Output()isUserAgreedToTerm=new EventEmitter<boolean>()
ngOnInit(): void {
  console.log(this.PropertyName)
}
updateIsUserAgreedToTerm(){
if(this.PropertyName=="agreed"){
this.isUserAgreedToTerm.emit()
console.log(this.PropertyName)

}

}
constructor(private appSvc:AppService){}
  handleButtonClick(event: any) {
    event.stopPropagation();
    setTimeout(() => {
      this.shouldUpdateSearchAd && this.appSvc.updateSearchSubject({ [this.PropertyName]: this.isChecked });
      this.shouldUpdateAd && this.appSvc.updateAdUploadSubject({ [this.PropertyName]: this.isChecked });
      this.shouldUpdateFilterAd && this.appSvc.updateAdFilterSubject({ [this.PropertyName]: this.isChecked });
    }, 1000);
  }


}
