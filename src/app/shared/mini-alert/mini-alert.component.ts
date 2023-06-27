import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-alert',
  templateUrl: './mini-alert.component.html',
  styleUrls: ['./mini-alert.component.css']
})
export class MiniAlertComponent {
@Input()number:number=0;
@Input()classNum!:string;
@Input()classCircle!:string;

}
