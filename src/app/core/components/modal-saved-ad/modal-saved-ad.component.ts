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
isDesOpen:boolean=false;

  ngOnInit(): void {



    this.appSvc.currentAdOpen.subscribe((newAd) => {
      this.ad = newAd;
    });
    this.imageItems = this.appSvc.currentAdImages.getValue();
    console.log(this.ad)
    if(this.ad){
      const {roomNumber,floor,totalSquareFootage}= this.ad
      this.data= [
       { value: `${roomNumber}`, label: 'חדרים' },
       { value: `${floor}`, label: 'קומה' },
       { value: `${totalSquareFootage}`, label: 'מ"ר' }
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
