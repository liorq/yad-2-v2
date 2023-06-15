import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  constructor(private router:Router){}
  imageItems = [
    { imageUrl: 'https://img.yad2.co.il/Pic/202303/18/2_1/o/y2_1_04417_20230318123544.jpeg' },
    { imageUrl: 'https://img.yad2.co.il/Pic/202303/18/2_1/o/y2_2_07922_20230318123553.jpeg' },
    { imageUrl: 'https://img.yad2.co.il/Pic/202303/18/2_1/o/y2_3_05484_20230318123616.jpeg' },
    { imageUrl: 'https://img.yad2.co.il/Pic/202303/18/2_1/o/y2_4_08848_20230318123628.jpeg' },
    { imageUrl: 'https://img.yad2.co.il/Pic/202303/18/2_1/o/y2_5_08773_20230318123918.jpeg' },
    { imageUrl: 'https://img.yad2.co.il/Pic/202303/18/2_1/o/y2_6_02282_20230318130342.jpeg' },
    { imageUrl: 'https://img.yad2.co.il/Pic/202303/18/2_1/o/y2_7_03870_20230318130413.jpeg' }
  ];
  stopProp(event:Event){
   event.stopPropagation()
  }
  navigateToImageGallery(event:Event){
    this.stopProp(event)
    this.router.navigate(['/realestate'])
  }
}
