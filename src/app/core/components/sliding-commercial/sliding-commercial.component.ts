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


    if(this.isScrollButtonClicked1)
    this.slideToNextCommercial('Part2')
    else
    this.slideToNextCommercial('Part1')

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
  if (target === 'Part1'&&!this.isScrollButtonClicked1) {
    this.isScrollButtonClicked1 = true;
    this.isScrollButtonClicked2=false
    setTimeout(()=>{
    },1000)
  } else if (target === 'Part2'&&!this.isScrollButtonClicked2) {
    this.isScrollButtonClicked2 = true;
    this.isScrollButtonClicked1=false
    setTimeout(()=>{
    },1000)

  }

}
}
