import Swal, { SweetAlertOptions } from "sweetalert2";

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



        export const successResUpdate:SweetAlertOptions<any, any>={
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast:any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }
        export const resSuccessObjMessage={
          icon: 'success',
          title: 'הפרופיל עודכן בהצלחה'
        }
        export const    accountOptionsObjForSignIn={array:[{label:'להרשמה',class:'sign-up'},{label:'?אין לך חשבון',class:'account'}],containerClass:'dont-have-account-container'};
        export const  titleContainerObjForSignUp={arrayOfContent:[{label:'',class:'halfRec'},{label:'היי,נעים להכיר',class:'title'}],containerClass:'title-container'}
        export const   accountOptionsObjForSignUp={array:[{label:'להתחברות',class:'sign-up'},{label:'?כבר יש לך חשבון',class:'account'}],containerClass:'dont-have-account-container dont-have-account-sign-up',url:"signUp"};
        export const customClassObjForMyAlert={"mini-buttons":true};
        export const customHiddenObjForMyAlert={'customHidden':true,'hidden':false};
        export const    customClassObjForRealEstate:any={"mini-buttons":true};
        export const   customHiddenObjForRealEstate:any={'customHidden':true,'hidden':false};
        export const contactLinkForFooter = {
          text: 'צור קשר',
          href: '#'
        };
        export   const NavigationObj:any={
          'SignUpForm':'sign-up-last-stage',
          'SignUpLastStageForm':'/sign-up-last-stage',
          'SignInForm':''
        }
