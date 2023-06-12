import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circled-num',
  templateUrl: './circled-num.component.html',
  styleUrls: ['./circled-num.component.css']
})
export class CircledNumComponent {
@Input()circleClass!:string;
@Input()num!:string|number;
@Input()isCircleChecked!:boolean;
}
