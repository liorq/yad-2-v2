import { Component, Input, OnInit } from '@angular/core';
import { apartment } from 'src/app/data/interfaces';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-modal-saved-ad',
  templateUrl: './modal-saved-ad.component.html',
  styleUrls: ['./modal-saved-ad.component.css']
})
export class ModalSavedAdComponent implements OnInit {
  @Input() ad!: apartment;
  imageItems: string[] = [];
  pageSize = 1; // Number of pictures to display per page
  currentPage = 1; // Current page number

  constructor(private appSvc: AppService) {}
  data:{ value: string, label: string }[]= [  ];

  data2:{ value: string, item: string }[] = [
    { item: 'מצב הנכס', value: 'במצב שמור' },
    { item: 'כניסה', value: 'א' },
    { item: 'תאריך כניסה', value: 'כניסה מיידית' },
    { item: 'מ"ר בנוי', value: '166' },
    { item: 'מרפסות', value: '2' },
    { item: 'חניות', value: '2' }
  ];

isDesOpen:boolean=false;
features = [
  { id: 'air_conditioner', title: 'מיזוג', checked: true },
  { id: 'bars', title: 'סורגים', checked: false },
  { id: 'elevator', title: 'מעלית', checked: false },
  { id: 'kosher_kitchen', title: 'מטבח כשר', checked: true },
  { id: 'boiler', title: 'דוד שמש', checked: true },
  { id: 'accessibility', title: 'גישה לנכים', checked: false },
  { id: 'renovated', title: 'משופצת', checked: false },
  { id: 'shelter', title: 'ממ"ד', checked: true },
  { id: 'warhouse', title: 'מחסן', checked: true },
  { id: 'tadiran_c', title: 'מזגן תדיראן', checked: false },
  { id: 'housing_unit', title: 'יחידת דיור', checked: true },
  { id: 'flexible_enter_date', title: 'גמיש', checked: false },
  { id: 'furniture', title: 'ריהוט', checked: false }
];

  ngOnInit(): void {



    this.appSvc.currentAdOpen.subscribe((newAd) => {
      this.ad = newAd;
    });
    this.imageItems = this.appSvc.currentAdImages.getValue();
    console.log(this.ad)
    if(this.ad){
      const {parking,porch,dateOfEntering,conditionOfProperty,roomNumber,floor,totalSquareFootage}= this.ad
      this.data= [
       { value: `${roomNumber}`, label: 'חדרים' },
       { value: `${floor}`, label: 'קומה' },
       { value: `${totalSquareFootage}`, label: 'מ"ר' }
     ];
     this.data2= [
      { item: 'מצב הנכס', value: `${conditionOfProperty}` },
      { item: 'כניסה', value: 'א' },
      { item: 'תאריך כניסה', value: `${dateOfEntering}` },
      { item: 'מ"ר בנוי', value: `${totalSquareFootage}` },
      { item: 'מרפסות', value: `${porch}` },
      { item: 'חניות', value: `${parking}` }
    ];
       }
  }

  toggleModal(event: Event): void {
    event.stopPropagation();
    this.appSvc.currentAdOpen.next({} as apartment);
  }


  preventEventPropagation(event: Event): void {
    event.stopPropagation();
  }



















}
