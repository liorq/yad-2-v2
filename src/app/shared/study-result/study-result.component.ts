import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-study-result',
  templateUrl: './study-result.component.html',
  styleUrls: ['./study-result.component.css','../../core/components/publish-section/step2/stage2step2/stage2step2.component.css']
})
export class StudyResultComponent {
@Input()picClass!:string;
@Input()topTitle!:string;
@Input()subTitle!:string;
@Input()bigContainer:string='info-contianer'






}
