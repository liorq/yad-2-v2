import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publish-category',
  templateUrl: './publish-category.component.html',
  styleUrls: ["../publish/publish.component.css",'./publish-category.component.css']
})
export class PublishCategoryComponent {
@Input()subcategory!:any[]
@Input()i!:number;
showContent:boolean=false;
}
