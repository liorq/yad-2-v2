import { Component } from '@angular/core';
import { topSidebarItems } from 'src/app/data/array';

@Component({
  selector: 'app-top-bar-nav',
  templateUrl: './top-bar-nav.component.html',
  styleUrls: ['./top-bar-nav.component.scss']
})
export class TopBarNavComponent {


  topSidebarItems =topSidebarItems
}
