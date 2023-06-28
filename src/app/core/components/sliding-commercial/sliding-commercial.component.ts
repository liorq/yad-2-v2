import { Component, OnInit } from '@angular/core';
import { slidingCommercialArray } from 'src/app/data/array';

@Component({
  selector: 'app-sliding-commercial',
  templateUrl: './sliding-commercial.component.html',
  styleUrls: ['./sliding-commercial.component.css'],
})
export class SlidingCommercialComponent implements OnInit{
slidingCommercialArray=slidingCommercialArray
isScrollButtonClicked1 = true;
isScrollButtonClicked2 = false;

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
  const id = document.getElementById(target);
  const container = document.getElementById('container');
  if (id && container) {
    const rect = id.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const x = rect.left - containerRect.left + container.scrollLeft;
    const y = rect.top - containerRect.top + container.scrollTop;
    container.scrollTo({ left: x, top: y, behavior: 'smooth' });
  }
  const showFirstAd=target === 'Part1'&&!this.isScrollButtonClicked1
  const showSecondAd=target === 'Part2'&&!this.isScrollButtonClicked2
  if (showFirstAd) {
    this.isScrollButtonClicked1 = showFirstAd;
    this.isScrollButtonClicked2=!showFirstAd
  } else if (showSecondAd) {
    this.isScrollButtonClicked1=!showSecondAd
    this.isScrollButtonClicked2 = showSecondAd;
  }

}
}
