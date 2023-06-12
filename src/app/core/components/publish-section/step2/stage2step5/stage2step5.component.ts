import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router){}

navigate(){
  this.router.navigate(['publish/stage-2/step6'])
}


}
