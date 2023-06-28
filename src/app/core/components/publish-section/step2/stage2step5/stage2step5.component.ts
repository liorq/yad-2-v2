import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { imageUploadInputs, mediaUploadInputs, step5Btns, step5DataArrays } from 'src/app/data/array';

@Component({
  selector: 'app-stage2step5',
  templateUrl: './stage2step5.component.html',
  styleUrls: ['./stage2step5.component.css']
})
export class Stage2step5Component {
  imageUploadInputs =imageUploadInputs
  mediaUploadInputs =mediaUploadInputs
  dataArrays =step5DataArrays
  btns=step5Btns
  constructor(private appSvc:AppService){}

navigate(){
  this.appSvc.navigate('publish/stage-2/step6')
}
}
