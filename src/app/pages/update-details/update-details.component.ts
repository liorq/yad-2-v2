import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { DbService } from 'src/app/core/services/db.service';
import { step5Btns } from 'src/app/data/array';
import { userUpdateRequest } from 'src/app/data/interfaces';

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

  btns=[
    {text:'שמירה',containerClass:'btn-connect-for-update-user-info',requiresUserRequestUpdate:true},
    {text:'ביטול',containerClass:'',requiresUserRequestUpdate:false},
    ]

  sections = [
    {
      title: "פרטים אישיים",
      subTitle: "",
      inputs: [
        {
          PropertyName: "FirstName",
          type: "text",
          shouldUpdateSearchAd: true,
          containerClass: "containerClass4",
          inputClass: "inputClass6",
          text: "שם פרטי*"
        },
        {
          PropertyName: "LastName",
          type: "text",
          shouldUpdateSearchAd: true,
          containerClass: "containerClass4",
          inputClass: "inputClass6",
          text: "שם משפחה*"
        },
        {
          PropertyName: "Phone",
          type: "text",
          shouldUpdateSearchAd: true,
          containerClass: "containerClass4",
          inputClass: "inputClass6",
          text: "טלפון*"
        },
        {
          PropertyName: "BirthDate",
          type: "date",
          shouldUpdateSearchAd: true,
          containerClass: "containerClass4",
          inputClass: "inputClass6",
          text: "תאריך לידה"
        }
      ]
    },
    {
      title: "כתובת",
      subTitle: "כדאי למלא את הכתובת, כדי שנוכל לחבר אותה אוטומטית בפעם הבאה שתפרסמו מודעה",
      inputs: [
        {
          PropertyName: "City",
          type: "text",
          shouldUpdateSearchAd: true,
          containerClass: "containerClass4",
          inputClass: "inputClass6",
          text: "עיר"
        },
        {
          PropertyName: "StreetName",
          type: "text",
          shouldUpdateSearchAd: true,
          containerClass: "containerClass4",
          inputClass: "inputClass6",
          text: "שם רחוב"
        },
        {
          PropertyName: "HouseNumber",
          type: "text",
          shouldUpdateSearchAd: true,
          containerClass: "containerClass4",
          inputClass: "inputClass6",
          text: "מספר בית"
        },


      ]
    }
  ];
  async userUpdateRequest(btn:any){
    ///userUpdateRequest
   if(btn.requiresUserRequestUpdate){
    const obj:userUpdateRequest=this.appSvc.userUpdateRequestSubject.getValue()
   const res=await this.dbSvc.updateUserInfo(obj);
   }
  }
}
