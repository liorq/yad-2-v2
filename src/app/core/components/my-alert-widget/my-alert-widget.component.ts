import { Component, OnInit } from '@angular/core';
import { apartment } from 'src/app/data/interfaces';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-my-alert-widget',
  templateUrl: './my-alert-widget.component.html',
  styleUrls: ['./my-alert-widget.component.css']
})
export class MyAlertWidgetComponent implements OnInit{
allAds!:apartment[]
constructor(private appSvc:AppService){}
ngOnInit(): void {
  this.appSvc.allAds.subscribe((data)=>{
    this.allAds=data;
    // console.log(this.allAds.length)
  })
}
}
