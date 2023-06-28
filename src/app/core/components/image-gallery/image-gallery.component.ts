import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit{
  constructor(private appSvc:AppService){}
  imageItems :any[]= [];
  ngOnInit(): void {
this.imageItems=this.appSvc.currentAdImages.getValue()
  }
  stopProp(event:Event){
    this.appSvc.preventEventPropagation(event)

  }
  navigateToImageGallery(event:Event){
    this.stopProp(event)
    this.appSvc.navigate('/realestate')
  }
}
