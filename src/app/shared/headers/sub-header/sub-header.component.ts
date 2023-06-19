import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent {
  buttons = [
    { containerClass: 'doronContainer', text: 'דורון-העוזר האישי', iconClass: 'doron' },
    { containerClass: 'yad1Container', text: 'יד1 דירות חדשות', iconClass: 'yad1' },
    { containerClass: 'estimationContainer', text: 'הערכת שווי נכס', iconClass: 'estimation' },
    { containerClass: 'hammerContainer', text: 'כונס נכסים', iconClass: 'hammer' }
  ];

  tabs = [
    { label: 'מכירה', isActive: true },
    { label: 'השכרה', isActive: false },
    { label: 'דירות שותפים', isActive: false },
    { label: 'נדל"ן מסחרי', isActive: false }
  ];

}
