import { Component, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css',"../publish/publish.component.css",'../publish-category/publish-category.component.css']
})
export class CategoryItemComponent {
@Input()category:any;
@Input()i!:number;
showContent!:boolean;
isModalOpen=false;

toggleModal(){
  this.isModalOpen=!this.isModalOpen;
}
}
