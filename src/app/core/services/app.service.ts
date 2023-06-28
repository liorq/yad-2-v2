import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Search, apartment, apartmentSearchQuery, userUpdateRequest } from 'src/app/data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router:Router) { }
  isSideBarOpen=new BehaviorSubject<boolean>(false);
  isUserLoggedSubject=new BehaviorSubject<boolean>(false);
  currentPage=new BehaviorSubject<string>("");
  currentAdImages=new BehaviorSubject<string[]>([]);
  currentAdOpen=new BehaviorSubject<apartment>({} as apartment);
  adsHasPictures=new BehaviorSubject<string[]>([]);



  adFilterSubject=new BehaviorSubject<{[key:string]:any}>({});

  adUploadSubject=new BehaviorSubject<apartment>({}as apartment);
  adFilterByTypeSubject=new BehaviorSubject<{[key:string]:boolean}>({});
  searchSubject=new BehaviorSubject<apartmentSearchQuery>({} as apartmentSearchQuery);
  userUpdateRequestSubject=new BehaviorSubject<userUpdateRequest>({} as userUpdateRequest);
  allAds = new BehaviorSubject<apartment[] | never[]>([]);
  allMyAds = new BehaviorSubject<apartment[] | never[]>([]);
  allMyFavAds = new BehaviorSubject<apartment[] | never[]>([]);
  adsToDisplay = new BehaviorSubject<apartment[] | never[]>([]);
  typeOfProperty = new BehaviorSubject<any[]>([]);


  removeApartment(ad:apartment){
    const newData=this.allMyAds.getValue().filter(a=>a.apartmentId!=ad.apartmentId);
    this.allMyAds.next(newData)
    console.log(newData)
  }
  updateSearchSubject(value:any){
    this.searchSubject.next(Object.assign( this.searchSubject.getValue()||{},value))
  }
  updateAdsHasPicturesSubject(value: any) {
    const currentValue = this.adsHasPictures.getValue() || []; // Retrieve the current value or initialize it as an empty array
    const updatedValue = [...new Set([...currentValue, value])]; // Use Set to remove duplicates and merge with the current value
    this.adsHasPictures.next(updatedValue);
  }
  typeOfPropertySubject(value:any){
    this.typeOfProperty.next(Object.assign( this.typeOfProperty.getValue()||{},value))
  }
  updateAdUploadSubject(value:any){
    this.adUploadSubject.next(Object.assign( this.adUploadSubject.getValue()||{},value))
  }
  updateUserRequest(value:any){
    this.userUpdateRequestSubject.next(Object.assign( this.userUpdateRequestSubject.getValue()||{},value))
  }
  updateAdFilterSubject(value:any){
    this.adFilterSubject.next(Object.assign( this.adFilterSubject.getValue()||{},value))
  }
  updateAdFilterByTypeSubject(value:any){
    this.adFilterByTypeSubject.next(Object.assign( this.adFilterByTypeSubject.getValue()||{},value))
    console.log(this.adFilterByTypeSubject.getValue())

  }
  /////generic
  // updateSubject(subject: Subject<any>, value: any) {
  //   subject.next(Object.assign(subject.getValue() || {}, value));
  // }
    updateSubject(subject: BehaviorSubject<any>, value: any) {
    subject.next(value);
  }
  isUserLogged(){
    const isUserHasValidToken=((localStorage.getItem('token')||"").length>0)
    this.isUserLoggedSubject.next(isUserHasValidToken)
    return isUserHasValidToken
  }
  getFormValues(...fields: string[]) {
    const formData: any = this.adUploadSubject.getValue() || {};

    return fields.reduce((formValues:any, field) => {
      const fieldValue = formData[field];
      const isFieldNumeric = this.isFieldNumeric(field);
      const isFieldEmail = this.isFieldEmail(field);
      const isFieldPhone = this.isFieldPhone(field);

      switch (true) {
        case isFieldNumeric:
          formValues[field] = this.isNumber(fieldValue);break;
        case isFieldEmail:
          formValues[field] = this.isEmailValid(fieldValue);break;
          case isFieldPhone:
            formValues[field] = this.isPhoneNumber(fieldValue);break;
        default:
          formValues[field] = !!fieldValue;break;
      }

      return formValues;
    }, {});
  }

  isEmailValid(email:string){
    const emailRegexPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailRegexPattern.test(email);
  }
   isNumber(input:string) {
    return /^\d+$/.test(input);
  }
  isPhoneNumber(input:string){
    return  /^05[0-9]\d{7}$/.test(input)
  }
  isFormValid(fieldValidity :{[key:string]:boolean}){
    const hasInvalidValues = Object.values(fieldValidity).every(value => value == true);
   return hasInvalidValues
}

 getValueFromObject( propertyName: string,obj: any=this.adUploadSubject.getValue()): any {
  return obj && obj[propertyName || ''];
}

isFieldNumeric(field:string){
const NumericFields=['parking','porch','builtUpArea','totalFloorInBuilding','houseNumber','price','totalSquareFootage','floor','totalFloorInBuilding']
return NumericFields.includes(field);
}
isFieldPhone(field:string){
  const phoneFields=['phone','personPhone']

  return phoneFields.includes(field);
  }
  isFieldEmail(field:string){
  return ['email'].includes(field);
  }
  getLastSearches():Search []{
    return JSON.parse(localStorage.getItem('searches')||'[]')
  }
  setLastSearches(val:Search []):void{
     localStorage.setItem('searches',JSON.stringify(val))
  }
  AddToLastSearches(newSearch:Search ):void{
    const allSearches=this.getLastSearches()
    allSearches.push(newSearch);
    this.setLastSearches(allSearches)
   }


   addLastSearch(){
    ///getLastSearchData
  const {hasWindowBars,hasStorage,minSqm,maxSqm,isResidentialUnit,parking,hasFurniture,minPrice,maxPrice,hasAccessibilityForDisabled,hasCentralAirConditioning,hasElevator,minFloor,maxFloor}=this.searchSubject.getValue()
  const newSearch ={
    title: 'נדל"ן - מכירה',
    link: '',
    details: [
      { label: 'מחיר', value: `${minPrice} - ${maxPrice}` },
      { label: 'גישה לנכים', value: hasAccessibilityForDisabled ? 'כן' : 'לא' },
      { label: 'מיזוג', value: hasCentralAirConditioning ? 'כן' : 'לא' },
      { label: 'מרפסת', value:hasElevator ? 'כן' : 'לא' },
      { label: 'סורגים', value: hasWindowBars ? 'כן' : 'לא'  },
      { label: 'מעלית', value: hasElevator ? 'כן' : 'לא'  },
      { label: 'קומה', value: `${minFloor} - ${maxFloor}` },
      { label: 'מרוהטת',value:  hasFurniture ? 'כן' : 'לא'},
      { label: 'חניה', value:  parking ? 'כן' : 'לא' },
      { label: 'ממ"ד', value: isResidentialUnit ? 'כן' : 'לא'  },
      { label: 'גודל דירה (במ"ר)', value: `${minSqm} - ${maxSqm}` },
      { label: 'מחסן', value: hasStorage ? 'כן' : 'לא'  },
    ],
    time: '12:00',
  };
  this.AddToLastSearches(newSearch)
  }
  preventEventPropagation(event: Event): void {
    event.stopPropagation();
  }
  navigate(value:string){
    this.router.navigate([`${value}`])
  }
  getNumOfAlerts(type:string){

    if(type=="love"){
      return this.allAds.getValue()!.length||0
    }
    if(type=="user-last-search"||type=='search'){
      return JSON.parse(localStorage.getItem("searches")||"[]").length;
    }
    return 0;
  }
}

