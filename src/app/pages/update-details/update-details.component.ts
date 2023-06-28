import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { btnsForUpdateDetails, sectionsForUpdateDetails, step5Btns } from 'src/app/data/array';
import { userUpdateRequest } from 'src/app/data/interfaces';
import { resSuccessObjMessage, successResUpdate } from 'src/app/data/objects';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit{
  form!:userUpdateRequest;
  async ngOnInit() {
  const res=await  this.dbSvc.getUserObject();
  console.log(res)
  }
  constructor(private dbSvc:DbService,private appSvc:AppService){}
  btns=btnsForUpdateDetails
  sections = sectionsForUpdateDetails;

  async userUpdateRequest(btn:any){
   if(btn.requiresUserRequestUpdate){
    const obj:userUpdateRequest=this.appSvc.userUpdateRequestSubject.getValue()
   const res=await this.dbSvc.updateUserInfo(obj);
   if(res === true){
    const res:any = Swal.mixin(successResUpdate)
    res.fire(resSuccessObjMessage)
   }
   }
  }
}
