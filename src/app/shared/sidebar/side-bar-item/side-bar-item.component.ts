import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css','../side-bar-nav/side-bar-nav.component.scss']
})
export class SideBarItemComponent {
@Input()item:any;
@Input()isColumnDirection!:boolean;
@Input()hasMinimumTextContent!:boolean;
@Input()textColor:string='black';
}
