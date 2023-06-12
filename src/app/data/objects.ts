export const  step2FieldValidity:{[key: string]: boolean}={
  typeOfProperty:false,
  city:false,
  street:false,
  conditionOfProperty:false,
  houseNumber:false,
  totalFloorInBuilding:false,
  }
  export const step3FieldValidity:{[key: string]: boolean}={
    roomNumber:false,
    parking:false,
    porch:false,

    }
    export const  step4FieldValidity:{[key: string]: boolean}={
      builtUpArea:false,
      totalSquareFootage:false,
      price:false,
      dateOfEntering:false
      }
      export const  step6FieldValidity:{[key: string]: boolean}={
        name:false,
        phone:false,
        personName:false,
        personPhone:false
        }
       export const iconSettings: { [key: string]: boolean[] } = {
          'TrashCan': [false],
          'mini-circle-plus': [true]
        };
        export const  RequiredActionsObj={isXSignNeeded:true,isDisconnectNeeded:false,isPersonalAreaNeeded:false}
