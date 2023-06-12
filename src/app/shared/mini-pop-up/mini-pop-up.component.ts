import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-mini-pop-up',
  templateUrl: './mini-pop-up.component.html',
  styleUrls: ['./mini-pop-up.component.css']
})
export class MiniPopUpComponent {
@Input() iconClass='trash-can';
@Input() containerClass='container8';
@Input() text='הסרה';
@Input()ad!:apartment;
constructor(private dbSvc:DbService,private appSvc:AppService){}
async removeAd(){
  alert("remove");
  console.log(this.ad)
 await this.dbSvc.removeAd(this.ad);
  this.appSvc.removeApartment(this.ad)
}
}
