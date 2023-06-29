import { Component, OnInit } from '@angular/core';
import { slidingCommercialArray } from 'src/app/data/array';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sliding-commercial',
  templateUrl: './sliding-commercial.component.html',
  styleUrls: ['./sliding-commercial.component.css'],
})
export class SlidingCommercialComponent implements OnInit{
slidingCommercialArray=slidingCommercialArray
isScrollButtonClicked1 = true;
isScrollButtonClicked2 = false;
constructor(private appSvc:AppService){}
ngOnInit(){
this.autoSlideToNextCommercial();
window.addEventListener('resize', () => this.handleResize());
}
handleResize(){
  this.slideToNextCommercial('Part2')
}
autoSlideToNextCommercial(){
  setInterval(()=>{
    this.isScrollButtonClicked1?this.slideToNextCommercial('Part2'):this.slideToNextCommercial('Part1')
  },10000)
}
slideToNextCommercial(target: string): void {
  this.appSvc.slideToNextCommercial(target,this)

}
}
