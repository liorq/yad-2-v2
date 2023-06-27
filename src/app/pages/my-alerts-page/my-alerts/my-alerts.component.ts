import { Component } from '@angular/core';
import { personalIcons } from 'src/app/data/array';

@Component({
  selector: 'app-my-alerts',
  templateUrl: './my-alerts.component.html',
  styleUrls: ['./my-alerts.component.css']
})
export class MyAlertsComponent {
  personalIcons =personalIcons
  customClassObj:any={"mini-buttons":true};
  customHiddenObj:any={'customHidden':true,'hidden':false};
   recommendations = [
    'אנחנו נגיע אלייך עם כל מה שחדש',
    'לא תתפספס אף מודעה',
    'המודעות יגיעו ישירות אלייך למייל'
  ];
}
