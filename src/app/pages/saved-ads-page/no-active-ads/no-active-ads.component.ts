import { Component } from '@angular/core';
import { savedAdsBoxes } from 'src/app/data/array';

@Component({
  selector: 'app-no-active-ads',
  templateUrl: './no-active-ads.component.html',
  styleUrls: ['./no-active-ads.component.css']
})
export class NoActiveAdsComponent {
  savedAdsBoxes = savedAdsBoxes

}
