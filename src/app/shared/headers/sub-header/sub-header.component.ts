import { Component } from '@angular/core';
import { buttonsForSubHeader, tabsForSubHeader } from 'src/app/data/array';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent {
  buttons = buttonsForSubHeader
  tabs = tabsForSubHeader

}
