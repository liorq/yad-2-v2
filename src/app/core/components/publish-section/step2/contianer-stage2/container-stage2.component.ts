import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-stage2',
  templateUrl: './container-stage2.component.html',
  styleUrls: ['./container-stage2.component.css']
})
export class ContainerStage2Component {
@Input()arrayFirstCloseSteps:any[]=[]
@Input()arrayAfterCloseSteps:any[]=[]
@Input()currentStepNum!:number;
@Input()title!:string;
}
