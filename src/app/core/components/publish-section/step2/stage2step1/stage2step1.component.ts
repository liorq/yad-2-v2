import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { propertyCategories } from 'src/app/data/array';

@Component({
  selector: 'app-stage2step1',
  templateUrl: './stage2step1.component.html',
  styleUrls: ['./stage2step1.component.css']
})
export class Stage2step1Component {
propertyCategories=propertyCategories
constructor(private appSvc:AppService){}
navigate(){
  this.appSvc.navigate('publish/stage-2/step2')
}
}
