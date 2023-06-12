import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';
import { userUpdateRequest } from 'src/app/data/interfaces';

@Component({
  selector: 'app-last-searches',
  templateUrl: './last-searches.component.html',
  styleUrls: ['./last-searches.component.css']
})
export class LastSearchesComponent implements OnInit{
allSearches:userUpdateRequest[]=[];
constructor(private dbSvc:DbService){}
async ngOnInit() {
  const res=await this.dbSvc.getAllMySearches()

}
}
