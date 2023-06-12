import { Component } from '@angular/core';
import { finalLinks, finalMessageLines } from 'src/app/data/array';

@Component({
  selector: 'app-stage2-final',
  templateUrl: './stage2-final.component.html',
  styleUrls: ['./stage2-final.component.css']
})
export class Stage2FinalComponent {
  finalMessageLines= finalMessageLines;
  finalLinks = finalLinks;
  manStarsImageUrl='https://assets.yad2.co.il/personal/images/general/man_stars.png'

}
