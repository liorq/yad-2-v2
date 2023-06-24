import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  constructor(private dbSvc:DbService){}
@Input()ad!:apartment;
@Input()likedAdId!:string;
@Input() isUserRemovedLike!:boolean;
@Input() userMissedUnlike:boolean=false;
@Input()comment:string="";
items: string[] = [
  'אין תשובה',
  'טלפון שגוי',
  'לא רלוונטי',
  'להתקשר החל מהשעה',
  'להתקשר מאוחר יותר'
];
isOpen:boolean=false;
ngOnInit(): void {
  console.log(this.likedAdId)

}
addWords(word:string){
this.comment+=" "+word;
}
async saveComment(){
 await this.dbSvc.addCommentToLikedApartment(this.likedAdId,this.comment)
}
unremovedLike(){
  location.reload();
}
}
