import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad-footer',
  templateUrl: './ad-footer.component.html',
  styleUrls: ['../ad-description/ad-description.component.css','./ad-footer.component.css']
})
export class AdFooterComponent {
  @Input()isModalFooter=false
  @Input() sidebarItems5 = [
    {
       title:{ isHalfRectangleNeeded:false,label: '', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'link' },
      subItems: [ ]
      ,
  },
  {
  title: {isHalfRectangleNeeded:false ,label: '', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'whatApp'},

  subItems: [ ]
  ,
  },
  {
  title: {isHalfRectangleNeeded:false, label: '', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'print' },

  subItems: [ ]
  ,
  }
  ,
  {
    title:      {isHalfRectangleNeeded:false, label: ' ', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'share' },


    subItems: [ ]
    ,
    }
    ,
    {
      title:      {isHalfRectangleNeeded:false, label: '', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'mail' },


      subItems: [ ]
      ,
      }
  ]
}
