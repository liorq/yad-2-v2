import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.css']
})
export class RealestateComponent implements OnInit{
  p=1;
 clickCounter=0
customClassObj:any={"mini-buttons":true};
customHiddenObj:any={'customHidden':true,'hidden':false};
allAds:apartment[]=[]
constructor(private dbSvc:DbService,private appSvc:AppService){}

async ngOnInit() {
  this.appSvc.allAds.subscribe((allAds)=>{
    this.allAds=allAds;
  })
  const res:any = await this.dbSvc.getAllAds();
  console.log(res)
  if (res && res.length>0){
    this.appSvc.allAds.next(res)
      this.allAds = res;

  }
  }
async handlePaginationChange(pageNumber: number) {

console.log(await this.dbSvc.getAllRangeAd(pageNumber))
  }


  sortByParameter(parameter: string): apartment[] {
    return this.allAds.sort((a: Record<string, any>, b: Record<string, any>) => {
      if (parameter === 'date') {
        return a[parameter] - b[parameter];
      } else if (parameter === 'priceHighToLow') {
        return b['price'] - a['price'];
      } else if (parameter === 'priceLowToHigh') {
        return a['price'] - b['price'];
      }

      return 0;
    });
  }

}
