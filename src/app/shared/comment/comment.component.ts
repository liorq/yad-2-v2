import { Component, Input, OnInit } from '@angular/core';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
@Input()ad!:apartment;
isOpen:boolean=false;
ngOnInit(): void {
  console.log(this.ad.comment)
  // console.warn("hi")
}
addComment(text:string){
  console.log(text)
}
}
