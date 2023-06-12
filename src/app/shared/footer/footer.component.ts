import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  links = [
    {
      text: 'רכב',
      href: '/vehicles/cars',
      target: '_self',
      class: 'internalLink link prefetched'
    },
    {
      text: 'נדל"ן',
      href: '/realestate/forsale',
      target: '_self',
      class: 'internalLink link prefetched'
    },
    {
      text: 'יד שנייה',
      href: '/lobby/products',
      target: '_self',
      class: 'externalLink link'
    },
    {
      text: 'דרושים IL',
      href: 'https://www.drushim.co.il',
      target: '_blank',
      class: 'externalLink link'
    }
  ];

  socialLinks = [
    {
      src: '//assets.yad2.co.il/yad2site/y2assets/images/footer/apple.png',
      alt: 'logo,apple',
      class: 'apple',
      href: 'https://itunes.apple.com/us/app/yad2-%D7%99%D7%932/id406318295?mt=8',
      target: '_blank'
    },
    {
      src: '//assets.yad2.co.il/yad2site/y2assets/images/footer/google-play.png',
      alt: 'logo,playstore',
      class: 'googlePlay',
      href: 'https://play.google.com/store/apps/details?id=com.goldtouch.ct.yad2',
      target: '_blank'
    },
    {
      src: '//assets.yad2.co.il/yad2site/y2assets/images/footer/facebook.png',
      alt: 'logo,facebook',
      class: 'facebook',
      href: 'https://www.facebook.com/yad2page',
      target: '_blank'
    },
    {
      src: '//assets.yad2.co.il/yad2site/y2assets/images/footer/youtube.png',
      alt: 'logo,youTube',
      class: 'youTube',
      href: 'https://www.youtube.com/user/MeYad2',
      target: '_blank'
    }
  ];

  menuItems = [
    {
      text: 'תקנון',
      href: 'https://2.yad2.co.il/eula',
      target: '_self'
    },
    {
      text: 'הצהרת נגישות',
      href: 'https://2.yad2.co.il/accessibility',
      target: '_self'
    },
    {
      text: 'מדיניות פרטיות',
      href: 'https://2.yad2.co.il/privacy',
      target: '_self'
    },
    {
      text: 'מפת האתר',
      href: '/sitemap',
      target: '_self',
      class: 'internalLink item prefetched'
    },
    {
      text: 'קריירה ביד2',
      href: 'http://career.yad2.co.il/',
      target: '_self',
      class: 'externalLink item'
    }
  ];

  contactLink = {
    text: 'צור קשר',
    href: '#'
  };

  version = 'pro';

}
