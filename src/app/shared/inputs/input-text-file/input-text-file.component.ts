import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-input-text-file',
  templateUrl: './input-text-file.component.html',
  styleUrls: ['./input-text-file.component.css']
})
export class InputTextFileComponent implements OnInit{
@Input()text!:string;
@Input()iconClass!:string;
@Input()containerClass:string='containerClass10';
@Input()InputId:string="";
@Input()ImgId:string="";
@Input()arrayOfPics:string[]=[]
@Input()isInputFileNeeded=true;
@Input()isPicNeeded=false;

constructor(private appSvc:AppService){}
  ngOnInit() {
  }

  uploadFile() {
    this.isPicNeeded = true;
    this.isInputFileNeeded = false;
    const inputFile = document.getElementById(this.InputId) as HTMLInputElement;

    if (inputFile.files == null || inputFile.files.length === 0) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const file = reader.result;

      if (typeof file === 'string') {
        // Push to the array
        // const currentPics = JSON.parse(localStorage.getItem("imgPreArray") || "[]");
        let {pics}=this.appSvc.adUploadSubject.getValue()
        if(pics==undefined){
          pics=[]
        }
        pics?.push(file)
        this.appSvc.updateAdUploadSubject({pics:pics})
         console.log(this.appSvc.adUploadSubject.getValue().pics)
        const img = document.getElementById(this.ImgId) as HTMLImageElement;
        img.src = file;
      }
    };

    reader.readAsDataURL(inputFile.files[0]);
  }

}
