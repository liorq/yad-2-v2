import { Component } from '@angular/core';

@Component({
  selector: 'app-my-alerts',
  templateUrl: './my-alerts.component.html',
  styleUrls: ['./my-alerts.component.css']
})
export class MyAlertsComponent {
   recommendations = [
    'אנחנו נגיע אלייך עם כל מה שחדש',
    'לא תתפספס אף מודעה',
    'המודעות יגיעו ישירות אלייך למייל'
  ];
}
