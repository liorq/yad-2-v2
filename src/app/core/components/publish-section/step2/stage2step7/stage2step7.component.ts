import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/core/services/db.service';
import { routeToChooseArray } from 'src/app/data/array';

@Component({
  selector: 'app-stage2step7',
  templateUrl: './stage2step7.component.html',
  styleUrls: ['./stage2step7.component.css']
})
export class Stage2step7Component {
  constructor(private router:Router,private dbSvc:DbService){}

navigate(){
  this.router.navigate(['publish/stage-2/final'])
}
routeToChooseArray=routeToChooseArray
}
