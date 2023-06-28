import { Component, Input, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';
import { itemsForComment } from 'src/app/data/array';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {
  constructor(private dbSvc:DbService){}
@Input()ad!:apartment;
@Input()likedAdId!:string;
@Input() isUserRemovedLike!:boolean;
@Input() userMissedUnlike!:boolean;
@Input()comment:string="";
items=itemsForComment
isOpen:boolean=false;
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
