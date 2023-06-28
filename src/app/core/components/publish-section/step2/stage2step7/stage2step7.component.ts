import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { routeToChooseArray } from 'src/app/data/array';

@Component({
  selector: 'app-stage2step7',
  templateUrl: './stage2step7.component.html',
  styleUrls: ['./stage2step7.component.css']
})
export class Stage2step7Component {
  constructor(private appSvc:AppService){}

navigate(){
  this.appSvc.navigate('publish/stage-2/final')
}
routeToChooseArray=routeToChooseArray
}
