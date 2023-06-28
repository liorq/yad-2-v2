import { Component, Input } from '@angular/core';
import { sidebarItemsForAdFooter } from 'src/app/data/array';

@Component({
  selector: 'app-ad-footer',
  templateUrl: './ad-footer.component.html',
  styleUrls: ['../ad-description/ad-description.component.css','./ad-footer.component.css']
})
export class AdFooterComponent {
  @Input()isModalFooter=false
  @Input() sidebarItemsForAdFooter = sidebarItemsForAdFooter
}
