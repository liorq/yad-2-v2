import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';
import { customClassObjForRealEstate, customHiddenObjForRealEstate } from 'src/app/data/objects';

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.css']
})
export class RealestateComponent implements OnInit{
  p=1;
 clickCounter=0;
customClassObj:any=customClassObjForRealEstate
customHiddenObj:any=customHiddenObjForRealEstate
allAds:apartment[]=[]
constructor(private dbSvc:DbService,private appSvc:AppService){}

async ngOnInit() {
  this.appSvc.allAds.subscribe((allAds)=>{
    this.allAds=allAds;
  })
  const res:any = await this.dbSvc.getAllAds();
  if (res && res.length>0){
    this.appSvc.allAds.next(res)
      this.allAds = res;
  }

  }
async handlePaginationChange(pageNumber: number) {
console.log(await this.dbSvc.getAllRangeAd(pageNumber))
  }
  sortByParameter(parameter: string): apartment[] {
  return this.appSvc.sortByParameter(parameter,this.allAds)
  }

}
