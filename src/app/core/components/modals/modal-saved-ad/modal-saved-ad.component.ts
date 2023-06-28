import { Component, Input, OnInit } from '@angular/core';
import { apartment } from 'src/app/data/interfaces';
import { AppService } from '../../../services/app.service';
import { initDataForSavedAdModal } from 'src/app/data/functions';

@Component({
  selector: 'app-modal-saved-ad',
  templateUrl: './modal-saved-ad.component.html',
  styleUrls: ['./modal-saved-ad.component.css']
})
export class ModalSavedAdComponent implements OnInit {
  @Input() ad!: apartment;
  imageItems: string[] = [];
  pageSize = 1;
  currentPage = 1;
  data:{ value: string, label: string }[]= [];

  secondaryData!:{ value: string, item: string }[]
  isDesOpen:boolean=false;
  features!:{ id: string, title: string, checked: boolean }[];
  constructor(private appSvc: AppService) {}

  ngOnInit(): void {
    this.appSvc.currentAdOpen.subscribe((newAd) => {
      this.ad = newAd;
    });
    const currentImages = this.appSvc.currentAdImages.getValue();
    this.imageItems = currentImages && currentImages.length > 0 ? currentImages : ["https://assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_re_placeholder_small.png"];
   const res= initDataForSavedAdModal(this.ad)
   if(res){
     this.data=res?.data;
     this.secondaryData=res.secondaryData
     this.features=res.features
   }
}

  toggleModal(event: Event): void {
   this.preventEventPropagation(event)
    this.appSvc.currentAdOpen.next({} as apartment);
  }
  preventEventPropagation(event: Event): void {
   this.appSvc.preventEventPropagation(event)
  }
}
