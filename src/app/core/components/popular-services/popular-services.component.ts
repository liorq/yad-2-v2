import { Component } from '@angular/core';
import { PopularServicesArray } from 'src/app/data/array';

@Component({
  selector: 'app-popular-services',
  templateUrl: './popular-services.component.html',
  styleUrls: ['./popular-services.component.css']
})
export class PopularServicesComponent {
  title="שירותים פופולריים"
  PopularServicesArray=PopularServicesArray
}
