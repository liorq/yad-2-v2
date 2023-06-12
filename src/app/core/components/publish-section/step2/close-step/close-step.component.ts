import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { closeStepStages } from 'src/app/data/array';

@Component({
  selector: 'app-close-step',
  templateUrl: './close-step.component.html',
  styleUrls: ['./close-step.component.css']
})
export class CloseStepComponent {
  @Input()num!:number;
  @Input() isCircleChecked!:boolean;
  closeStepStages=closeStepStages


  constructor(private router:Router){}
   navigate(path:string){
  this.router.navigate([`publish/stage-2/${path}`])
}

}
