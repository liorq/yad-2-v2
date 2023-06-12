import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-file',
  templateUrl: './input-text-file.component.html',
  styleUrls: ['./input-text-file.component.css']
})
export class InputTextFileComponent {
@Input()text!:string;
@Input()iconClass!:string;
@Input()containerClass:string='containerClass10'
}
