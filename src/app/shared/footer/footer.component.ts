import { Component } from '@angular/core';
import { linksForFooter, menuItemsForFooter, socialLinksForFooter } from 'src/app/data/array';
import { contactLinkForFooter } from 'src/app/data/objects';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  links = linksForFooter
  socialLinks =socialLinksForFooter
  menuItems = menuItemsForFooter
  contactLink = contactLinkForFooter
  version = 'pro';

}
