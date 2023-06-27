export interface apartment{
apartmentId :string,
comment:string,
category:'sale',
street:string,
price:number,
isPromoted:boolean,
hasAirConditioning:boolean,
hasWindowBars:boolean,
hasElevator:boolean,
hasKosherKitchen:boolean,
hasSolarHeater:boolean,
hasAccessibilityForDisabled:boolean,
isRenovated:boolean,
isSmartHome:boolean,
hasStorage:boolean,
hasCentralAirConditioning:boolean,
hasFurniture:boolean,
isResidentialUnit:boolean,
agreedToGetUpdates: boolean,
totalSquareFootage: number,
pics:string[],
city: string,
conditionOfProperty: string,
des: string,
email: string,
floor: number,
houseNumber: number,
immediate: boolean,
parking: string,
name: string,
porch: string,
roomNumber: number,
totalFloorInBuilding: number,
typeOfProperty: string,
dateOfEntering:string
}
export interface apartmentSearchQuery extends  apartment
    {

  minFloor:number,
  minSqm:number,
  minPrice:number,
  maxPrice:number,
  minRooms:number,
  maxRooms:number,
  maxFloor:number,
  maxSqm:number,
  arrayOfTypeProperty:string[],
    }

   export  interface userUpdateRequest {
      firstName: string;
      lastName: string;
      phone: string;
      birthDate?: Date;
      city: string;
      streetName: string;
      houseNumber: string;
    }
    export  interface SearchDetails {
      label: string;
      value: string;
    }

    export interface Search {
      title: string;
      link: string;
      details: SearchDetails[];
      time: string;
    }
export interface user
{
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  confirmPassword:string,
}
