import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
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
  constructor(private appSvc:AppService){}
   navigate(path:string){
    this.appSvc.navigate(`publish/stage-2/${path}`)
}

}
