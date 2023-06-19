import { Component, Input, OnInit } from '@angular/core';

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

@Input()isInputFileNeeded=true;
@Input()isPicNeeded=false;


  ngOnInit() {
  }

uploadFile(){
  this.isPicNeeded=true;
  this.isInputFileNeeded=false;
  const inputFile = document.getElementById(this.InputId) as HTMLInputElement;

  if (inputFile.files == null) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    const file = reader.result;
    console.log(file);

    if(typeof file== 'string'){
      ///push to the array
    const currentPics=JSON.parse(localStorage.getItem("imgPreArray")||"[]")
    currentPics.push(file)
    localStorage.setItem("imgPreArray", JSON.stringify(currentPics));
    const img= document.getElementById(this.ImgId)
    img?.setAttribute("src",file)
    }

  };

  reader.readAsDataURL(inputFile.files[0]);
}

}
