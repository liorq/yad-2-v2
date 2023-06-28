import { Component } from '@angular/core';
import { personalIcons, recommendations } from 'src/app/data/array';
import { customClassObjForMyAlert, customHiddenObjForMyAlert } from 'src/app/data/objects';

@Component({
  selector: 'app-my-alerts',
  templateUrl: './my-alerts.component.html',
  styleUrls: ['./my-alerts.component.css']
})
export class MyAlertsComponent {
  personalIcons =personalIcons;
  customClassObj=customClassObjForMyAlert
  customHiddenObj=customHiddenObjForMyAlert
   recommendations = recommendations
}
