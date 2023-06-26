import { getCurrentDay } from "./functions";
import { RequiredActionsObj } from "./objects";

  export const categories2 = [
    {
            id: 4,

      categoryCss: "item1 rowCategory2",
      title: "עסקים למכירה",
      subTitle: "הייטק, בתי קפה וכו",
      icon:
        "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/business.svg",
    },
    {
                  id:5,

      categoryCss: "item2 rowCategory2 columnCategory",
      title: "בעלי מקצוע",
      subTitle: "הובלות, מוסכים, שיפוצים",
      icon:
        "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/profession.svg",
    },
    {
                        id:6,

      categoryCss: "item3 rowCategory2 columnCategory",
      title: 'נדל"ן מסחרי',
      subTitle: "מחסנים, קליניקות, משרדים",
      icon:
        "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/commercial.svg",
    },
    {
                              id:7,

      categoryCss: "item4 rowCategory2 columnCategory",
      title: "משרות",
      subTitle: "הצעות עבודה",
      icon:
        "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/drushim_new.svg",
      drushimTitle: "חדש",
    },
  ];

    export const categories3 = [
    {
       id:8,

      icon: "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/furniture.svg",
      title: "ריהוט",
      subTitle: "",
    },
    {
                                          id:9,

      icon: "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/fashion.svg",
      title: "אופנה וטיפוח",
      subTitle: "",
    },
    {
                                          id:10,

      icon: "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/pets.svg",
      title: "חיות מחמד",
      subTitle: "",
    },
    {
                                                id:11,

      icon: "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/kids.svg",
      title: "לתינוק ולילד",
      subTitle: "",
    },
    {
                                                      id:12,

      icon: "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/tech.svg",
      title: "סלולר",
      subTitle: "",
    },
  ];

    export const categories1 = [
    {
      id: 1,
      icon:
        "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/nadlan.svg",
      title: 'נדל"ן',
      subTitle: "מכירה, השכרה, מסחרי",
    },
    {
      id: 2,
      icon:
        "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/vehicle.svg",
      title: "כלי רכב",
      subTitle: "כלי רכב, דו גלגלי, כלי שיט, מיוחדים",
    },
    {
      id: 3,
      icon:
        "https://assets.yad2.co.il/personal/svg/subCategories_publish_icons/mainCategoriesIcons/newIcons/second_hand.svg",
      title: "יד שניה",
      subTitle: "לבית לגינה ולמשרד, חשמל, ספורט פנאי ושונות",
    },
  ];
    export const allCategories = [categories1, categories2, categories3];
///////here
    export const   step2Options = [
      { value:"", label: "?דירה או אולי פנטהאוז" },
      { value: "דירה", label: "דירה" },
      { value: "דירת גן", label: "דירת גן" },
      { value: "בית פרטי/קוטג'", label: "בית פרטי/קוטג'" },
      { value: "גג/פנטהאוז", label: "גג/פנטהאוז" },
      { value: "מגרשים", label: "מגרשים" },
      { value: "דופלקס", label: "דופלקס" },
      { value: "תיירות ונופש", label: "תיירות ונופש" },
      { value: "דו משפחתי", label: "דו משפחתי" },
      { value: "מרתף/פרטר", label: "מרתף/פרטר" },
      { value: "טריפלקס", label: "טריפלקס" },
      { value: "יחידת דיור", label: "יחידת דיור" },
      { value: "משק חקלאי/נחלה", label: "משק חקלאי/נחלה" },
      { value: "משק עזר", label: "משק עזר" },
      { value: "דיור מוגן", label: "דיור מוגן" },
      { value: "בניין מגורים", label: "בניין מגורים" },
      { value: "סטודיו/לופט", label: "סטודיו/לופט" },
      { value: "מחסן", label: "מחסן" },
      { value: "חניה", label: "חניה" },
      { value: "קב' רכישה/ זכות לנכס", label: "קב' רכישה/ זכות לנכס" },
      { value: "כללי", label: "כללי" }
    ];

    export const  step2SecondaryOptions=[
     {value:"",label: "משופץ? חדש מקבלן"},
      {value:"חדש מקבלן (לא גרו בו בכלל)",label:"חדש מקבלן (לא גרו בו בכלל)"},
      {value:"חדש (נכס בן עד 5 שנים)",label:"חדש (נכס בן עד 5 שנים)"},
      {value:"חדש (נכס בן עד 5 שנים)",label:"חדש (נכס בן עד 5 שנים)"},
      {value:"משופץ (שופץ ב5 השנים האחרונות)",label:"משופץ (שופץ ב5 השנים האחרונות)"},
      {value:"במצב שמור (במצב טוב, לא שופץ)",label:"במצב שמור (במצב טוב, לא שופץ)"},
     {value:"דרוש שיפוץ (זקוק לעבודת שיפוץ)",label: "דרוש שיפוץ (זקוק לעבודת שיפוץ)"},

    ];


    export const   step2Btns=[
    {text:'חזרה',containerClass:'btnBack'},
    {text:'להמשיך לשלב הבא',containerClass:'btnNext'},
    ]





    export const   step2SelectBoxes = [
      {
        text: 'סוג הנכס',
        options: step2Options,
        selectedOption: {},
        objName:'typeOfProperty',
        shouldUpdateAdSubject:true
      },
      {
        text: 'מצב הנכס',
        options: step2SecondaryOptions,
        selectedOption: {},
        objName:'conditionOfProperty',
        shouldUpdateAdSubject:true


      }
    ];








    export const  step2TextBoxes = [
      {shouldUpdateAdSubject:true, PropertyName:'OnPages',text: 'על עמודים' , containerClass: '', textClass: ''},
      {shouldUpdateAdSubject:true, PropertyName:'agreedToGetUpdates', text: 'אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדלן', containerClass: 'containerClassMax', textClass: 'max' }
    ];

    export const  step2Inputs = [

      {
        placeholder: '',
        text: 'מס בית',
        isInputDisabled:false,
        textUnderInput:'',
        isTextUnderInputNeeded:false,
        shouldUpdateAdSubject:true,
         PropertyName:'houseNumber',

      },
      {
        placeholder: 'הכנסת מספר קומה',
        text: 'קומה',
        isInputDisabled:false,
        textUnderInput:'',
        isTextUnderInputNeeded:false,
        shouldUpdateAdSubject:true,
        PropertyName:'floor',
      },
      {
        placeholder: 'הכנסת סהכ קומות',
        text: 'סהכ קומות בבניין',
        isInputDisabled:false,
        textUnderInput:'',
        isTextUnderInputNeeded:false,
        shouldUpdateAdSubject:true,
        PropertyName:'totalFloorInBuilding',


      },
        {
        placeholder: '',
        text: 'שכונה',
        isInputDisabled:true,
        textUnderInput:'המידע הזה מגיע מגוף ממשלתי ולא ניתן לשינוי'
        ,classTextUnderInput:'mini-text',
        isTextUnderInputNeeded:true,
        shouldUpdateAdSubject:false,
        PropertyName:'neighborhood',

      }
      ,
        {
        placeholder: '',
        text: 'אזור מכירה',
        isInputDisabled:true,
        textUnderInput:'המידע הזה מגיע מגוף ממשלתי ולא ניתן לשינוי'
        ,classTextUnderInput:'mini-text',
        isTextUnderInputNeeded:true,
        shouldUpdateAdSubject:false,
        PropertyName:'salesZoon',

      }
    ];
    export const step3Options = [
      { value: '0', label: '0' },
      { value: '0.5', label: '0.5' },
      { value: '1', label: '1' },
      { value: '1.5', label: '1.5' },
      { value: '2', label: '2' },
      { value: '2.5', label: '2.5' },
      { value: '3', label: '3' },
      { value: '3.5', label: '3.5' },
      { value: '4', label: '4' },
      { value: '4.5', label: '4.5' },
      { value: '5', label: '5' },
      { value: '5.5', label: '5.5' },
      { value: '6', label: '6' },
      { value: '6.5', label: '6.5' },
      { value: '7', label: '7' },
      { value: '7.5', label: '7.5' },
      { value: '8', label: '8' },
      { value: '8.5', label: '8.5' },
      { value: '9', label: '9' },
      { value: '9.5', label: '9.5' },
      { value: '10', label: '10' },
      { value: '10.5', label: '10.5' },
      { value: '11', label: '11' },
      { value: '11.5', label: '11.5' },
      { value: '12', label: '12' },
      { value: '12.5', label: '12.5' }
    ];

    export const  step3Numbers=[{val:1},{val:2},{val:3},{val:"ללא"}]
    export const  step3SelectBoxes = [
      {
        text: 'מספר חדרים',
        options: step3Options,
        selectedOption: {},
        objName:"roomNumber",
        shouldUpdateAdSubject:true,
      },

    ];
  export const step3Btns=[
    {text:'חזרה',containerClass:'btnBack'},
    {text:'להמשיך לשלב הבא',containerClass:'btnNext'},
    ]

    export const step3ButtonsWithIcons = [
      {
         title:{ isHalfRectangleNeeded:false, label: 'מיזוג', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'snow',propertyName:'hasAirConditioning' },

        subItems: [],
  },
  {
    title: {isHalfRectangleNeeded:false, label: 'סורגים', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'table' ,propertyName:'hasWindowBars'},
    subItems: [],
  },
  {
    title: {isHalfRectangleNeeded:false, label: 'מעלית', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'elevator',propertyName:'hasElevator'},

    subItems:[],
  },
  {
    title:      {isHalfRectangleNeeded:false, label: 'מטבח כשר', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'sink',propertyName:'hasKosherKitchen'},


    subItems: [],
  }
  ,
  {
    title: {  isHalfRectangleNeeded:false,
      label: 'דוד שמש', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'solar' ,propertyName:'hasSolarHeater'},
    subItems:[],
  },
  {
    title:{ isHalfRectangleNeeded:false, label: 'גישה לנכים', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'wheelchair' ,propertyName:'hasAccessibilityForDisabled'},

   subItems: [],
  },
  {
  title: {isHalfRectangleNeeded:false, label: 'משופצת', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'brush',propertyName:'isRenovated'},
  subItems: [],
  },
  {
  title: {isHalfRectangleNeeded:false, label: 'ממ"ד', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'home' ,propertyName:'Shelter'},

  subItems:[],
  },
  {
  title:      {isHalfRectangleNeeded:false, label: 'מחסן', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'graze',propertyName:'hasStorage'},


  subItems: [],
  }
  ,
  {
  title: {  isHalfRectangleNeeded:false,
  label: 'מזגן תדיראן', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'air-con' ,propertyName:'hasCentralAirConditioning'},
  subItems:[],
  },
  {
    title:{ isHalfRectangleNeeded:false, label: 'ריהוט', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'furniture',propertyName:'hasFurniture' },

   subItems: [],
  },
  {
  title: {isHalfRectangleNeeded:false, label: 'יחידת דיור', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'home-icon',propertyName:'isResidentialUnit' },
  subItems: [],
  },



  ];


 export const step4Checkboxes=[{text:"מיידי",PropertyName:'immediate',shouldUpdateAdSubject:true},{text:'גמיש',PropertyName:'flexible',shouldUpdateAdSubject:true}]
 export const step4Btns=[
    {text:'חזרה',containerClass:'btnBack'},
    {text:'להמשיך לשלב הבא',containerClass:'btnNext'},
    ]

    export const step4Inputs = [
  {
    placeholder: 'כמה מ"ר יש בנכס',
    text: 'מ"ר בנוי',
    shouldUpdateAdSubject:true,
    PropertyName:'builtUpArea'    ,type:'text'
   ,min:''
  },
  {
    placeholder: '',
    text: 'גודל במ"ר סך הכל',
    shouldUpdateAdSubject:true,
    PropertyName:'totalSquareFootage'
    ,type:'text'
    ,min:''

  },
  {
    placeholder: 'סכום מינימלי 100,000',
    text: 'מחיר',
    shouldUpdateAdSubject:true,
    PropertyName:'price'
    ,type:'text'
    ,min:''

  },
  {
    placeholder: 'DD/MM/YYYY',
    text: 'תאריך כניסה',
    shouldUpdateAdSubject:true,
    PropertyName:'dateOfEntering'
    ,type:'date'   ,min:`${getCurrentDay()}`

  },
];
export const imageUploadInputs =[

  {id:"imgPre10",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'},
    {id:"imgPre11",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'}
,  {id:"imgPre12",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'}
,  {id:"imgPre13",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'}
,  {id:"imgPre14",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'}
,  {id:"imgPre15",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'}
,  {id:"imgPre16",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'}
,  {id:"imgPre17",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'}
,  {id:"imgPre18",iconClass:'plus',text:'העלאת תמונה',container:'containerClass10'}

]
export const mediaUploadInputs =[
  {id:"imgPre19",iconClass:'plus',text:'העלאת תמונה',container:''},
  {id:"imgPre20",iconClass:'video',text:'העלאת סרטון',container:'containerClass10'}]

  export const step5DataArrays =[{arrayOfInputs:mediaUploadInputs ,classContainer:'container-inputs-file',titleClass:'title5',titleText:'ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?\nלא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס'},
               {arrayOfInputs:imageUploadInputs,classContainer:'container-inputs-file',titleClass:'title',titleText:'תמונות שיופיעו בגוף המודעה'}
]
export const step5Btns=[
{text:'חזרה',containerClass:'btnBack'},
{text:'להמשיך לשלב הבא',containerClass:'btnNext'},
]


export const  step5CheckboxItems = [
  {classContainer:'containerClassMax' ,text: 'קראתי ואישרתי את התקנון',textClass:'max-2 max bold' },
  {classContainer:'containerClassMax', textClass:'max-2 max', text: 'אשמח לקבל עדכונים, הצעות או טיפים לשיפור המודעה שלי לפרטי החשבון או לפרטי המודעה' }
];

export const step6Inputs = [
  {
    placeholder: '',
    text: 'שם איש קשר',
    btnText:'',
    topBtnText:'טלפון ראשי',
    containerClass:'phoneInput',
     iconClass:'circle-plus',
     isBtnNeeded:true,
         isInputNeeded:true,
      shouldUpdateAdSubject:true,
         PropertyName:'name',
         isInputContainerNeeded:true,
         isAnotherInputNeeded:true,
         secondPropertyName:'phone',

  },
  {
    placeholder: '',
    text: 'איש קשר נוסף',
    topBtnText:'טלפון נוסף',
    btnText:'',
    containerClass:'phoneInput',
    iconClass:'circle-plus',
    isBtnNeeded:true,
    isInputNeeded:true,
    shouldUpdateAdSubject:true,
    PropertyName:'personName',
    secondPropertyName:'personPhone',

    isInputContainerNeeded:false,
    isAnotherInputNeeded:true



  },
  {
    placeholder: '',
    text: 'דוא"ל',
    topBtnText:'',
    btnText:'',
    containerClass:'phoneInput',
    iconClass:'',
    isBtnNeeded:false,
    isInputNeeded:true,
    shouldUpdateAdSubject:true,
    PropertyName:'email',
    isInputContainerNeeded:true,
    isAnotherInputNeeded:false,
    secondPropertyName:'none',


  },

];
export const step6OptionBtnArray=[
   {
  placeholder: '',
  text: 'הוסף איש קשר נוסף',
  btnText:'הוסף איש קשר נוסף',
  topBtnText:'',
  containerClass:'addAnotherPersonContainer',
  iconClass:'mini-circle-plus',
  isBtnNeeded:true,
  isInputNeeded:false,
  shouldUpdateAdSubject:false,
   PropertyName:'"',
   isInputContainerNeeded:true

   , ngIf:true


},
{
  placeholder: '',
  text: 'ביטול',
  btnText:'ביטול',
  topBtnText:'',
  containerClass:'TrashCanContainer',
  iconClass:'TrashCan',
  isBtnNeeded:true,
  isInputNeeded:false,
  shouldUpdateAdSubject:false,
   PropertyName:'"',
   isInputContainerNeeded:false

   , ngIf:false


}]
export const step6Btns=[
{text:'חזרה',containerClass:'btnBack'},
{text:'להמשיך לשלב הבא',containerClass:'btnNext'},
]
export const  routeToChooseArray=[{
  classBtn:'vipBtnContainer', textBtn:'המסלול המומלץ',classTopImage:'rocket',title:'בולט במיוחד',objPriceAndDays:{'price':'259 ₪','days':'ימים 60'},isHighlyRecommended:true,arrayOfData:[
   {textClass:'checkTextBold',iconClass:'check',text:'מופיעה בצהוב מעל כולם',containerClass:'containerClassDis'},
   {textClass:'checkText',iconClass:'check',text:'הקפצה ידנית כל 4 שעות',containerClass:'containerClassDis'},
   {textClass:'checkText',iconClass:'check',text:'הקפצה אוטומטית פעם ביום',containerClass:'containerClassDis'},
   {textClass:'checkText',iconClass:'check',text:'מקבלת הכי הרבה טלפונים',containerClass:'containerClassDis'},
 ]}


 ,{classBtn:'normalBtnContainer',textBtn:'בחירה במסלול',classTopImage:'rocket',title:'בולט',isHighlyRecommended:false,objPriceAndDays:{'price':'199 ₪','days':'ימים 28'},arrayOfData:[
   {textClass:'checkTextBold',iconClass:'check',text:'מופיעה בצהוב מעל כולם',containerClass:'containerClassDis'},
   {textClass:'checkText',iconClass:'check',text:'הקפצה ידנית כל 4 שעות',containerClass:'containerClassDis'},
   {textClass:'checkText',iconClass:'check',text:'הקפצה אוטומטית פעם ביום',containerClass:'containerClassDis'},
 ]}



 ,{classBtn:'normalBtnContainer',textBtn:'בחירה במסלול', classTopImage:'kite',title:'בסיסי',isHighlyRecommended:false,objPriceAndDays:{'price':'חינם','days':'-'},arrayOfData:[
   {textClass:'checkTextBold',iconClass:'check',text:'מופיעה בצהוב מעל כולם',containerClass:'containerClassDis'},
   {textClass:'checkText',iconClass:'check',text:'הקפצה ידנית כל 4 שעות',containerClass:'containerClassDis'},

 ]}

 ]
export const advanceSearchFloorOptions  = [
  // { value: "0", label: "הכל" },
  { value: "1000", label: "מרתף/פרטר" },
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" }
];
export const advanceSearchCheckBoxOptions =[{PropertyName:'parking',text:"חניה"}, {PropertyName:'hasElevator',text:"מעלית"}, {PropertyName:'hasAirConditioning',text:"מיזוג"}, {PropertyName:'porch',text:"מרפסת"}, {PropertyName:'isResidentialUnit',text:"ממ\"ד"}, {PropertyName:'hasWindowBars',text:"סורגים"}, {PropertyName:'hasStorage',text:"מחסן"}, {PropertyName:'hasAccessibilityForDisabled',text:"גישה לנכים"}, {PropertyName:'isRenovated',text:"משופצת"}, {PropertyName:'hasFurniture',text:"מרוהטת"}, {PropertyName:'exclusivity',text:"בבלעדיות"}]

export const feedButtons = [
  {id:'b1', icon: 'rectangleDown', containerClass: 'inputClass4', text: 'לפי תאריך',isRadioBtnsNeeded:true,isTextBoxNeeded:false,btnType:'radio' },
  {id:'b2', icon: 'location', containerClass: 'inputClass5', text: 'תצוגת מפה',isRadioBtnsNeeded:false,isTextBoxNeeded:false,btnType:'none' },
  {id:'b3', icon: 'filterIcon', containerClass: 'inputClass5', text: 'סנן תוצאות',isRadioBtnsNeeded:false,isTextBoxNeeded:true,btnType:'checkbox'}
];
export const PopularCategoriesArray=[
  {title:"נדל״ן",picClass:'realEstatePic'},
  {title:"רכב",picClass:'vehiclesPic'},
 {title: "יד שנייה",picClass:'secondHandPic'},
  {title:"דרושים",picClass:'drushimPic'},
  {title:"חיות מחמד",picClass:'petsPic'},
  {title:"בעלי מקצוע",picClass:'professionalPic'},
  {title:"עסקים למכירה",picClass:'businessPic'},
]
export const PopularServicesArray=[
  {classPic:'doronPic',subTitle:'דורון',description:"העוזר האישי שלך שיעזור לך למצוא דירה תיק תק"},
  {classPic:'priceList',subTitle:'מחירון רכב',description:'מידע ומחירים בזמן אמת במחיר השוק האמיתי'}
  ,{classPic:'calc',subTitle:'Yadata',description:'לדעת כמה הדירה שווה בעזרת מחשבון חדשני'}
  ,{classPic:'yzer',subTitle:'Yzer',description:'לקבל החלטות חכמות בשוק הנדל"ן הדינמי ולזיהוי הזדמנויות'},
  ]
  export const  apartmentButtons=[
    {text:'חזרה',containerClass:'btnBack'},
    {text:'להמשיך לשלב הבא',containerClass:'btnNext'},
    ]
    export const   closeStepStages=[{text:'?באיזו קטגוריה נפרסם היום',path:'step1'},{text:'כתובת הנכס',path:'step2'},{text:'על הנכס',path:'step3'},{text:'תשלומים, תאריכים ועוד',path:'step4'},
    {text:'תמונות וסרטונים',path:'step5'},{text:'פרטים ליצירת קשר',path:'step6'},{text:'בחירת מסלול',path:'step7'}];
    export const  propertyCategories=[{ class:"home",title:'מכירה'},{ class:"home-for-rent",title:'השכרה'},{ class:"partners",title:'שותפים'},{ class:"business",title:'מסחרי'}]
    export const filterOptions=[{filter:'עם מחיר',PropertyName:'withPrice'},{filter:'עם תמונה',PropertyName:'withPictures'},{filter:'מודעות מלקוחות עסקיים',PropertyName:'business'}]
    export const slidingCommercialArray=[{orangeBtnText:"למידע נוסף",classCommercial:'container-commercial-Part1' ,idCommercial:'Part1',classTopTitle:"Part1ClassTopTitle",topText:"האפליקציה",classBottomTitle:"Part1ClassBottomTitle",bottomText:"לא מפספסת כלום",classMiddleTitle:"Part1ClassMiddleTitle",middleText:"החדשה",desktopImg:'desktopImgFirst',link:'realestate'},
    {orangeBtnText:"למגוון הגדול בארץ",classCommercial:'container-commercial-Part2' ,idCommercial:'Part2',classTopTitle:"Part2ClassTopTitle",topText:"?משרד ליד הרכבת",classBottomTitle:"Part2ClassBottomTitle",bottomText:"נדלן מסחרי זה רק ביד 2",classMiddleTitle:"Part2ClassMiddleTitle",middleText:"?חנות בשכונה נחשבת",desktopImg:'desktopImgSecond',link:'realestate'}]

    export const personalSidebarItems = [
      {
         title:{ isHalfRectangleNeeded:false,label: 'המודעות שלי', url: '/personal/my-liked-ads', iconPath: 'M2.75 7C2.75 5.75736 3.75736 4.75 5 4.75H19C20.2426 4.75 21.25 5.75736 21.25 7V17C21.25 18.2426 20.2426 19.25 19 19.25H5C3.75736 19.25 2.75 18.2426 2.75 17V7ZM5 3.25C2.92893 3.25 1.25 4.92893 1.25 7V17C1.25 19.0711 2.92893 20.75 5 20.75H19C21.0711 20.75 22.75 19.0711 22.75 17V7C22.75 4.92893 21.0711 3.25 19 3.25H5ZM13.75 9C13.75 8.86193 13.8619 8.75 14 8.75H17C17.1381 8.75 17.25 8.86193 17.25 9V15C17.25 15.1381 17.1381 15.25 17 15.25H14C13.8619 15.25 13.75 15.1381 13.75 15V9ZM14 7.25C13.0335 7.25 12.25 8.0335 12.25 9V15C12.25 15.9665 13.0335 16.75 14 16.75H17C17.9665 16.75 18.75 15.9665 18.75 15V9C18.75 8.0335 17.9665 7.25 17 7.25H14ZM6.25 10C6.25 9.58579 6.58579 9.25 7 9.25H10C10.4142 9.25 10.75 9.58579 10.75 10C10.75 10.4142 10.4142 10.75 10 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10ZM6 12.25C5.58579 12.25 5.25 12.5858 5.25 13C5.25 13.4142 5.58579 13.75 6 13.75H10C10.4142 13.75 10.75 13.4142 10.75 13C10.75 12.5858 10.4142 12.25 10 12.25H6Z' },
         subItems: [],
    },
    {
    title: {isHalfRectangleNeeded:false ,label: 'עדכון פרטים', url: '/personal/update', iconPath: "M15.7 4c.5 0 .979.198 1.332.55l2.01 2.008a1.88 1.88 0 0 1 .001 2.66l-9.236 9.247a.747.747 0 0 1-.327.191l-5.032 1.41a.747.747 0 0 1-.92-.918l1.413-5.025a.746.746 0 0 1 .19-.325L14.37 4.55C14.722 4.198 15.2 4 15.7 4Zm-2.806 4.137-6.568 6.576-1.002 3.56 3.564-1 6.557-6.565-2.551-2.571ZM15.7 5.491a.392.392 0 0 0-.276.114L13.77 7.261l2.551 2.571 1.667-1.668a.392.392 0 0 0 0-.552l-2.01-2.007a.391.391 0 0 0-.277-.114Z" },

    subItems: [],

    },
    {
    title: {isHalfRectangleNeeded:false, label: 'מודעות שמורות', url: '/personal/saved-ads', iconPath: 'M2.25 9.81c0-3.197 2.582-5.56 5.446-5.56 1.286 0 2.502.443 3.451 1.244l.013.01.989.872.988-.872.013-.01A5.336 5.336 0 0 1 16.6 4.25c1.37 0 2.745.404 3.788 1.336 1.058.946 1.694 2.364 1.694 4.224 0 1.918-1.03 4.195-2.677 6.37-1.665 2.198-4.03 4.384-6.858 6.125a.75.75 0 0 1-.786 0c-2.831-1.742-5.19-3.951-6.848-6.159-1.64-2.183-2.664-4.46-2.664-6.336Zm5.446-4.06c-2.054 0-3.946 1.71-3.946 4.06 0 1.4.801 3.356 2.363 5.435 1.467 1.954 3.544 3.931 6.042 5.536 2.501-1.604 4.584-3.564 6.055-5.506 1.566-2.067 2.373-4.024 2.373-5.465 0-1.498-.5-2.485-1.193-3.105-.709-.633-1.7-.955-2.789-.955-.936 0-1.805.32-2.478.886l-1.479 1.302a.75.75 0 0 1-.991 0l-1.479-1.302a3.837 3.837 0 0 0-2.478-.886Z' },

    subItems: [],

    },
    {
    title:      {isHalfRectangleNeeded:false, label: 'חיפושים אחרונים', url: '/personal/last-searches', iconPath: 'M10.409 3.25c3.949 0 7.158 3.124 7.158 6.988a6.88 6.88 0 0 1-2.066 4.91l3.311 3.323a.75.75 0 0 1-.986 1.126l-.076-.068-3.428-3.44a7.253 7.253 0 0 1-3.913 1.137c-3.95 0-7.159-3.124-7.159-6.988 0-3.864 3.21-6.988 7.159-6.988Zm0 1.5c-3.13 0-5.659 2.462-5.659 5.488 0 3.026 2.529 5.488 5.659 5.488s5.658-2.462 5.658-5.488c0-3.026-2.529-5.488-5.658-5.488Z' },


    subItems: [],

    }
    ,
    {
    title: {isHalfRectangleNeeded:false, label: 'הונאות ברשת', url: '/personal/tips-and-info', iconPath: 'M24 23h-24l12-22 12 22zm-22.315-1h20.63l-10.315-18.912-10.315 18.912zm10.315-2c.466 0 .845-.378.845-.845 0-.466-.379-.844-.845-.844-.466 0-.845.378-.845.844 0 .467.379.845.845.845zm.5-11v8h-1v-8h1z' },
    subItems: [],


    },
    {
    title: {isHalfRectangleNeeded:false,  label: 'טיפים ומידע', url: '/personal/tips-and-info', iconPath: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z' },

    subItems: [],
    },
    {
      title: {id:'a1',   isHalfRectangleNeeded:false,label: '', url: '/personal/my-liked-ads', iconPath: 'M14 3.941C14 2.871 13.104 2 11.996 2 10.896 2 10 2.871 10 3.941c0 1.076.897 1.948 1.996 1.948C13.103 5.889 14 5.018 14 3.94Zm.121 4.224 5.05-.61c.478-.02.848-.41.828-.867-.016-.461-.421-.817-.9-.798l-6.018.474H10.6L4.95 5.9c-.478-.037-.912.305-.947.765a.818.818 0 0 0 .763.895l4.652.606v4.914l-2.117 7.666c-.194.474.105 1.007.595 1.19.495.184 1.046-.034 1.24-.507l2.305-7.259h.772l2.506 7.111c.128.493.65.762 1.16.64.51-.122.82-.615.69-1.108L14.124 13l-.002-4.835Z' },

      subItems: []

      },
      {
        title: {id:'a2', isHalfRectangleNeeded:false, label: '', url: '/personal/my-liked-ads', iconPath: 'M7.593 15.288c2.397 2.758 5.332 5.064 9.026 5.276a.752.752 0 0 0 .277-.036c.756-.249 1.37-.54 1.89-.991.52-.452.892-1.02 1.243-1.735a.75.75 0 0 0 .012-.635 7.747 7.747 0 0 0-4.098-3.999.75.75 0 0 0-.854.205c-.28.327-.416.474-.557.597-.1.087-.213.17-.399.292-.237-.092-.578-.287-1.005-.62-.556-.434-1.162-1.023-1.723-1.668-.56-.646-1.06-1.328-1.412-1.939-.27-.469-.417-.834-.475-1.082.148-.167.245-.266.345-.353.142-.123.307-.237.668-.469a.75.75 0 0 0 .323-.817 7.758 7.758 0 0 0-3.39-4.616.75.75 0 0 0-.631-.077c-.756.25-1.37.54-1.89.991-.52.452-.892 1.019-1.244 1.733a.75.75 0 0 0-.075.27c-.304 3.688 1.571 6.915 3.969 9.673Z' },

        subItems: [],

        }
    ];

 export const personalSidebarConfigs = [                                                                                                                       ///sidenav
    { id: 'sidenavForPersonalPage2', sideBarId: 'sidenavForPersonalPage', RequiredActionsObj: RequiredActionsObj, textColor: 'white',sideBarNavClass: 'sidenav', sideBarData: personalSidebarItems },
    { id: 'sidenavForPersonalPage4', sideBarId: 'sidenavForPersonalPage2', RequiredActionsObj: RequiredActionsObj, textColor: 'white', sideBarNavClass: 'ShowSidenav', sideBarData: personalSidebarItems }
  ];
export const   savedAdsBoxes = [
  { number: "200,000", text: "מודעות חדשות כל חודש" },
  { number: "17,500,000", text: "כניסות חודשיות לאתר" },
  { number: "136", text: "צפיות חודשיות במודעה" },
  { number: "560,000", text: "ביקורים יומיים באתר" }
];
export const  personalIcons = [

  {type:"",url:'',fill:'orange',size:24.5,id:"navBarIconForPersonal", class: '', path: 'M8.29 25.333c-.91 0-1.623-.713-1.623-1.624s.713-1.622 1.623-1.622h15.391c.886 0 1.611.704 1.652 1.601 0 .931-.713 1.645-1.623 1.645H8.29zm0-7.723c-.91 0-1.623-.713-1.623-1.624s.713-1.624 1.623-1.624h15.391c.886 0 1.611.704 1.652 1.604 0 .93-.713 1.643-1.623 1.643H8.29zm0-7.696c-.91 0-1.623-.713-1.623-1.624S7.38 6.666 8.29 6.666h15.391c.886 0 1.611.704 1.652 1.604 0 .93-.713 1.643-1.623 1.643H8.29z' }

]
export const signInFormFields = [
  {
    label: 'מייל',
    name: 'email',
    type: 'text',
    placeholder: 'yourmail@example.com',
    passwordVisibilityObj:{counter:0}

  },
  {
    label: 'סיסמא',
    name: 'password',
    type: 'password',
    placeholder: 'הקלדת סיסמא',
    passwordVisibilityObj:{counter:0}
  }
];
////headerIcons
///<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
export const headerIcons = [
  {type :"bell", fill:'currentColor',size:24,id:"", class: 'bellIcon',url:'', path: 'M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z' },

  {type :"messages", fill:'currentColor',size:24,id:"",url:'chat', class: 'messagesIcon', path: 'M8.81 17.093V19.95a.02.02 0 00.036.012l.01-.012.931-1.134.524-.637 1.39-1.692a1 1 0 01.772-.365h3.018a4 4 0 004-4V8.956a4 4 0 00-4-4H7.956a4 4 0 00-4 4v3.282a3.884 3.884 0 003.884 3.884.97.97 0 01.97.97zm6.68-13.637H7.957a5.5 5.5 0 00-5.5 5.5v3.282a5.384 5.384 0 004.855 5.358v2.354c0 1.427 1.789 2.067 2.694.964l2.704-3.292h2.782a5.5 5.5 0 005.5-5.5V8.956a5.5 5.5 0 00-5.5-5.5zM6.605 9.093a.75.75 0 01.75-.75h7.865a.75.75 0 010 1.5H7.354a.75.75 0 01-.75-.75zm0 3.277a.75.75 0 01.75-.75h4.806a.75.75 0 110 1.5H7.354a.75.75 0 01-.75-.75z' },
  {type :"love",fill:'currentColor',size:24,id:"", class: 'loveIcon',url:'', path: 'M2.1 8.81c0-3.197 2.582-5.56 5.446-5.56 1.286 0 2.502.443 3.451 1.244l.007.005.995.877.995-.877.006-.005a5.336 5.336 0 013.451-1.244c1.37 0 2.745.404 3.788 1.336 1.058.946 1.694 2.364 1.694 4.224 0 1.918-1.03 4.195-2.677 6.37-1.665 2.198-4.03 4.384-6.858 6.125l-.393.242-.393-.242c-2.831-1.742-5.19-3.951-6.848-6.159C3.124 12.963 2.1 10.686 2.1 8.81zm5.446-4.06C5.492 4.75 3.6 6.46 3.6 8.81c0 1.4.801 3.356 2.363 5.435 1.467 1.954 3.544 3.931 6.042 5.536 2.501-1.604 4.584-3.564 6.056-5.506 1.565-2.067 2.372-4.024 2.372-5.465 0-1.498-.5-2.485-1.193-3.105-.709-.633-1.7-.955-2.789-.955-.936 0-1.805.32-2.478.886l-1.974 1.739-1.975-1.74a3.837 3.837 0 00-2.478-.885z' },
////
  {type :"navbtn",fill:'currentColor',size:24.5,id:"navBarIcon",url:'', class: 'navBarIcon', path: 'M8.29 25.333c-.91 0-1.623-.713-1.623-1.624s.713-1.622 1.623-1.622h15.391c.886 0 1.611.704 1.652 1.601 0 .931-.713 1.645-1.623 1.645H8.29zm0-7.723c-.91 0-1.623-.713-1.623-1.624s.713-1.624 1.623-1.624h15.391c.886 0 1.611.704 1.652 1.604 0 .93-.713 1.643-1.623 1.643H8.29zm0-7.696c-.91 0-1.623-.713-1.623-1.624S7.38 6.666 8.29 6.666h15.391c.886 0 1.611.704 1.652 1.604 0 .93-.713 1.643-1.623 1.643H8.29z' }
]
export const loginArray = [
  { class: 'icon-alert', label: 'התראות' },
  { class: 'icon-chat', label: 'צ׳אט' },
  { class: 'icon-pub', label: 'פרסום מודעה' },
  { class: 'icon-profile', label: 'אזור אישי' }
];
export const  searchColumnsRooms =[
  { value: "1", label: "1" },
  { value: "1.5", label: "1.5" },
  { value: "2", label: "2" },
  { value: "2.5", label: "2.5" },
  { value: "3", label: "3" },
  { value: "3.5", label: "3.5" },
  { value: "4", label: "4" },
  { value: "4.5", label: "4.5" },
  { value: "5", label: "5" },
  { value: "5.5", label: "5.5" },
  { value: "6", label: "6" },
  { value: "6.5", label: "6.5" },
  { value: "7", label: "7" },
  { value: "7.5", label: "7.5" },
  { value: "8", label: "8" },
  { value: "8.5", label: "8.5" },
  { value: "9", label: "9" },
  { value: "9.5", label: "9.5" },
  { value: "10", label: "10" },
  { value: "10.5", label: "10.5" },
  { value: "11", label: "11" },
  { value: "11.5", label: "11.5" },
  { value: "12", label: "12" }
];
export const searchItems = [

  {hasTree:true, newTreeData:{
'כל סוגי הנכסים': {
    'דירות': [  "דירה",  "דירת גן",  "גג/פנטהאוז",  "דופלקס",  "תיירות ונופש",  "מרתף/פרטר",  "טריפלקס",  "יחידת דיור",  "סטודיו/לופט"]
,
    'בתים': ["בית פרטי/קוטג'", "דו משפחתי", "משק חקלאי/נחלה", "משק עזר"]
,
    'סוגים נוספים': [    "מגרשים",    "דיור מוגן",    "בניין מגורים",    "מחסן",    "חניה",    "קב' רכישה/ זכות לנכס",    "כללי"]
,
},
},label: "סוג נכס", containerClass: "inputClass", buttonText: "בחרו סוגי נכסים" ,checkBoxes:[{text:''}]},
 {hasTree:false,newTreeData:[], label: "חדרים", containerClass: "inputClass3", buttonText: "חדרים",checkBoxes:[{text:''}]



}
];
export const sidebarMenuItems = [
  {
     title:{ isHalfRectangleNeeded:false, label: 'צ׳אט', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M8.81 17.093V19.95a.02.02 0 00.036.012l.01-.012.931-1.134.524-.637 1.39-1.692a1 1 0 01.772-.365h3.018a4 4 0 004-4V8.956a4 4 0 00-4-4H7.956a4 4 0 00-4 4v3.282a3.884 3.884 0 003.884 3.884.97.97 0 01.97.97zm6.68-13.637H7.957a5.5 5.5 0 00-5.5 5.5v3.282a5.384 5.384 0 004.855 5.358v2.354c0 1.427 1.789 2.067 2.694.964l2.704-3.292h2.782a5.5 5.5 0 005.5-5.5V8.956a5.5 5.5 0 00-5.5-5.5zM6.605 9.093a.75.75 0 01.75-.75h7.865a.75.75 0 010 1.5H7.354a.75.75 0 01-.75-.75zm0 3.277a.75.75 0 01.75-.75h4.806a.75.75 0 110 1.5H7.354a.75.75 0 01-.75-.75z' },

    subItems: [],
},
{
title: {isHalfRectangleNeeded:false, label: 'מודעות שאהבתי', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: "M2.1 8.81c0-3.197 2.582-5.56 5.446-5.56 1.286 0 2.502.443 3.451 1.244l.007.005.995.877.995-.877.006-.005a5.336 5.336 0 013.451-1.244c1.37 0 2.745.404 3.788 1.336 1.058.946 1.694 2.364 1.694 4.224 0 1.918-1.03 4.195-2.677 6.37-1.665 2.198-4.03 4.384-6.858 6.125l-.393.242-.393-.242c-2.831-1.742-5.19-3.951-6.848-6.159C3.124 12.963 2.1 10.686 2.1 8.81zm5.446-4.06C5.492 4.75 3.6 6.46 3.6 8.81c0 1.4.801 3.356 2.363 5.435 1.467 1.954 3.544 3.931 6.042 5.536 2.501-1.604 4.584-3.564 6.056-5.506 1.565-2.067 2.372-4.024 2.372-5.465 0-1.498-.5-2.485-1.193-3.105-.709-.633-1.7-.955-2.789-.955-.936 0-1.805.32-2.478.886l-1.974 1.739-1.975-1.74a3.837 3.837 0 00-2.478-.885z" },
subItems: [],
},
{
  // <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
title: {isHalfRectangleNeeded:false, label: 'חיפושים אחרונים', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M15.332 5.107a7.818 7.818 0 00-9.865 3.445l2.11-.006a.75.75 0 11.004 1.5l-3.82.01a.75.75 0 01-.752-.748L3 5.488a.75.75 0 111.5-.003l.004 1.754C6.908 3.533 11.69 1.96 15.91 3.723a9.317 9.317 0 11-12.623 10.89.75.75 0 011.453-.371 7.817 7.817 0 0014.788 1.09 7.815 7.815 0 00-4.196-10.225z" fill="currentColor"></path><path d="M12.743 9.017a.75.75 0 00-1.493.102V14l.007.104a.75.75 0 00.234.447l2.418 2.231.087.07a.75.75 0 00.973-.113l.069-.087a.75.75 0 00-.112-.972l-2.177-2.01.001-4.551-.007-.102z' },

subItems:[],
},
{
title:      {isHalfRectangleNeeded:false, label: 'התראות', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M11.84 22.24c-.79 0-1.57-.25-2.21-.72-.63-.46-1.1-1.13-1.32-1.87a.645.645 0 01-.03-.2v-.2H3.79c-.3 0-.58-.17-.71-.43s-.1-.56.08-.79c.04-.07.08-.13.14-.23.1-.2.25-.54.41-1.05.29-.96.64-2.7.64-5.46 0-1.95.78-3.79 2.19-5.17a7.609 7.609 0 014.21-2.07l.17-.02V2.77c0-.42.35-.77.79-.77.44 0 .79.34.79.77v1.22l.18.02c1.68.19 3.26.93 4.46 2.1a7.195 7.195 0 012.19 5.17c0 3.08.34 4.79.63 5.68.16.48.3.74.38.86l.07.09c.24.23.32.55.22.83-.11.31-.41.51-.75.51h-4.46v.2c0 .07-.02.14-.04.2-.22.74-.69 1.4-1.32 1.87-.63.46-1.42.72-2.21.72h-.01zm-1.89-2.69c.15.29.36.55.63.75.36.26.81.41 1.26.41.45 0 .89-.14 1.26-.41.27-.2.48-.45.63-.75l.14-.29H9.81l.14.29zM11.83 5.5c-1.58 0-3.06.6-4.18 1.69a5.657 5.657 0 00-1.73 4.09c0 2.37-.24 4.35-.7 5.89-.03.1-.18.54-.18.54h13.51l-.1-.3c-.47-1.44-.71-3.51-.71-6.14 0-1.55-.62-3-1.73-4.09a5.95 5.95 0 00-4.18-1.69v.01z' },


subItems: [],
}
,
{
title: {  isHalfRectangleNeeded:false,
  label: 'השוואת רכבים', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M15.33 6.043a.75.75 0 00-1.335-.47l-2.38 2.972a.75.75 0 00-.005.932l2.38 3.029a.75.75 0 001.34-.463v-2.25h5.472a.75.75 0 000-1.5H15.33v-2.25zm-1.5 2.136v.114h-.091l.091-.114zm0 1.614h-.064l.064.081v-.081zm-3.819.786a.75.75 0 00-1.34.463v2.25h-5.47a.75.75 0 000 1.5h5.47v2.25a.75.75 0 001.336.47l2.38-2.972a.75.75 0 00.004-.932l-2.38-3.029zm.16 4.327v-.114h.092l-.091.114zm0-1.614h.065l-.064-.08v.08z' },
subItems:[],
},

];



export const navigationMenuItems = [
{
   title:{ isHalfRectangleNeeded:true,label: 'נדלן', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M12 4c.53 0 1.061.195 1.478.585l.035.034 7.261 7.1a.736.736 0 01.17.814.72.72 0 01-.652.464h-2.111v6.259a.745.745 0 01-.61.733l-.033.005-.095.006h-3.101a.745.745 0 01-.737-.713v-.031l-.001-3.907h-3.052v3.907a.745.745 0 01-.611.733l-.032.005-.096.006H6.478a.744.744 0 01-.737-.713v-6.29H3.738a.726.726 0 01-.663-.417.764.764 0 01-.072-.411.723.723 0 01.135-.349l.02-.027.068-.074 7.26-7.1A2.158 2.158 0 0112 4zm0 1.488a.694.694 0 00-.487.199L5.56 11.509h.918l.033.002a.745.745 0 01.699.648l.006.096v6.257h1.861v-3.907l.001-.033a.744.744 0 01.643-.705l.095-.006h4.526l.03.001c.192.008.365.09.492.217.133.135.215.321.215.526v3.907h1.627v-6.258l.001-.033a.745.745 0 01.643-.705l.096-.006.993-.001-5.952-5.822-.023-.021A.693.693 0 0012 5.488z' },
  subItems: [  { label:'דירות למכירה'},  { label:'דירות להשכרה'},  { label:'שותפים'},  { label:'מסחרי'},  { label:'חיפוש על גבי מפה'},  { label:'יד1 דירות חדשות'},  { label:'דורון - העוזר האישי',iconPathClass: 'doronSvg'},  { label:'כונס נכסים',iconPath:"M3.703 11.267a.25.25 0 01.024-.397L6.5 9.014a6.75 6.75 0 002.434-2.909l1.081-2.476a.25.25 0 01.393-.09l5.054 4.353a.25.25 0 01.027.351l-1.201 1.425a1.75 1.75 0 00.304 2.54l5.213 3.82a.25.25 0 01.053.351l-1.246 1.662a.25.25 0 01-.352.048l-5.43-4.153a1.75 1.75 0 00-2.365.221L9.144 15.63a.25.25 0 01-.35.022l-5.091-4.385zm-.81-1.645a1.75 1.75 0 00-.17 2.781l5.093 4.386a1.75 1.75 0 002.443-.157l1.322-1.471a.25.25 0 01.338-.032l5.43 4.153a1.75 1.75 0 002.463-.34l1.246-1.662a1.75 1.75 0 00-.366-2.462l-5.214-3.819a.25.25 0 01-.044-.363l1.202-1.425a1.75 1.75 0 00-.196-2.454l-5.054-4.353a1.75 1.75 0 00-2.745.625L7.559 5.505a5.25 5.25 0 01-1.893 2.263L2.893 9.622zm1.143 8.497a1 1 0 100 2h7.014a1 1 0 100-2H4.036z"},  { label:'הערכת שווי נכס',iconPath:"M4.75 20c0 .414.336.75.75.75h13a.75.75 0 00.75-.75V4a.75.75 0 00-.75-.75h-13a.75.75 0 00-.75.75v16zm1.5-.75V4.75h11.5v14.5H6.25zM8 9.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3V9.8zm.3-3.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h7.4a.3.3 0 00.3-.3V6.8a.3.3 0 00-.3-.3H8.3zM11 9.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3V9.8zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3V9.8a.3.3 0 00-.3-.3h-1.4zM8 12.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3v-1.4zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3h-1.4zm2.7.3a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3v-1.4zm-5.7 2.7a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3H8.3zm2.7.3a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3v-1.4zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3h-1.4z"},  { label:'משרדי תיווך בישראל',iconPath:"M12 4c.53 0 1.061.195 1.478.585l.035.034 7.261 7.1a.736.736 0 01.17.814.72.72 0 01-.652.464h-2.111v6.259a.745.745 0 01-.61.733l-.033.005-.095.006h-3.101a.745.745 0 01-.737-.713v-.031l-.001-3.907h-3.052v3.907a.745.745 0 01-.611.733l-.032.005-.096.006H6.478a.744.744 0 01-.737-.713v-6.29H3.738a.726.726 0 01-.663-.417.764.764 0 01-.072-.411.723.723 0 01.135-.349l.02-.027.068-.074 7.26-7.1A2.158 2.158 0 0112 4zm0 1.488a.694.694 0 00-.487.199L5.56 11.509h.918l.033.002a.745.745 0 01.699.648l.006.096v6.257h1.861v-3.907l.001-.033a.744.744 0 01.643-.705l.095-.006h4.526l.03.001c.192.008.365.09.492.217.133.135.215.321.215.526v3.907h1.627v-6.258l.001-.033a.745.745 0 01.643-.705l.096-.006.993-.001-5.952-5.822-.023-.021A.693.693 0 0012 5.488z"}]
  ,
},
{
title: {isHalfRectangleNeeded:true ,label: 'רכב', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: "M20.706 9.88c.399.1.697.399.995.697.299.398.299.697.299 1.194v2.19c0 .497-.199.994-.597 1.392-.398.398-.796.597-1.293.597h-.697c-.299 1.294-1.393 2.19-2.687 2.19-1.293 0-2.388-.896-2.686-2.19h-3.383c-.299 1.294-1.393 2.19-2.687 2.19-1.293 0-2.388-.896-2.686-2.19H3.89c-.597 0-.995-.199-1.393-.597C2.199 14.955 2 14.458 2 13.96l.1-1.99c0-.497.199-.895.398-1.293.298-.398.696-.597 1.194-.697l2.388-.398c.398 0 .696-.199.995-.398l2.587-2.487c.597-.398 1.293-.697 1.99-.697h4.875c.597 0 1.194.199 1.692.498.497.298.895.796 1.094 1.293l.797 1.89.596.2zm-4.08-2.387h-.895V9.88h2.886l-.597-1.393c-.2-.299-.398-.498-.597-.697-.2-.199-.498-.298-.796-.298zm-5.87.398c.299-.2.597-.398.995-.398h2.488V9.78H8.567l2.19-1.89zm-4.08 7.462c0 .697.598 1.294 1.294 1.294.697 0 1.294-.597 1.294-1.294 0-.696-.597-1.293-1.294-1.293-.696 0-1.293.597-1.293 1.293zm10.05 1.294a1.317 1.317 0 01-1.293-1.294c0-.696.597-1.293 1.293-1.293.697 0 1.294.597 1.294 1.293 0 .697-.597 1.294-1.294 1.294zm3.831-2.488c.025-.074.05-.149.05-.199v-2.189c0-.1 0-.199-.1-.298-.099-.1-.198-.2-.298-.2H5.483l-1.493.2c-.1.1-.199.1-.199.1 0 .049-.025.099-.05.148-.024.05-.05.1-.05.15l-.099 1.99c0 .199 0 .298.1.398 0 .1.199.199.298.199h1.294c.398-1.095 1.393-1.791 2.587-1.791 1.194 0 2.189.796 2.587 1.79h3.681c.398-1.094 1.393-1.79 2.588-1.79 1.194 0 2.189.796 2.587 1.79h.796c.199 0 .398 0 .398-.099 0-.05.024-.124.05-.199z" },

subItems:[  { label:"כל הרכבים"},  { label:"מסחרי"},  { label:"ג'יפים"},  { label:"אופנועים"},  { label:"קטנועים"},  { label:"מיוחדים"},  { label:"אביזרים"},  { label:"משאיות"},  { label:"כלי שייט"},  { label:"קטלוג רכבים",iconPath:"M20.5 9a1.36 1.36 0 00-.36.05v-.6a3 3 0 00-3-3h-6.52A3 3 0 009 6a3.07 3.07 0 00-1.16 1.32l-1 2.54a1 1 0 01-.72.6L3.45 11a2 2 0 00-1.14.69A2.07 2.07 0 001.87 13v2.48a2 2 0 002 2h.43a2.73 2.73 0 005.4 0h3.6a2.73 2.73 0 005.41-.09 2.001 2.001 0 001.43-1.91V15c.117.033.238.05.36.05A1.5 1.5 0 0022 13.5v-3A1.5 1.5 0 0020.5 9zM7.93 17.81c-.105.11-.227.205-.36.28l-.13.07a1.12 1.12 0 01-.88 0l-.13-.07a.861.861 0 01-.22-.15.865.865 0 01-.14-.13 1.275 1.275 0 01-.13-.19 1.19 1.19 0 01.68-1.79.94.94 0 01.76 0 1.19 1.19 0 01.68 1.79c-.038.067-.081.13-.13.19zm8.64.28c.133-.075.255-.17.36-.28.049-.06.092-.123.13-.19a1.19 1.19 0 00-.68-1.79.94.94 0 00-.76 0 1.19 1.19 0 00-.68 1.79c.037.067.08.13.13.19.105.11.227.205.36.28l.13.07c.281.12.599.12.88 0l.13-.07zm2.07-2.64a.51.51 0 01-.15.35 2.74 2.74 0 00-5 .13H9.54a2.75 2.75 0 00-5.08 0h-.59a.49.49 0 01-.36-.15.5.5 0 01-.14-.35V13a.49.49 0 01.39-.48l2.64-.56a2.52 2.52 0 001.81-1.54l1-2.53a1.54 1.54 0 01.55-.68 1.49 1.49 0 01.86-.21h6.52a1.47 1.47 0 011.06.44 1.5 1.5 0 01.44 1.06v6.95zm-8.98-3.79a1.1 1.1 0 00.79.18h6.05a1 1 0 00.71-.29 1 1 0 00.29-.73l-.08-2.43-.12-.26a1.17 1.17 0 00-.8-.24h-5.31c-.202.001-.4.06-.57.17a1.07 1.07 0 00-.37.48l-.83 2.39v.31c.052.154.133.297.24.42zm1.88-2.27H16v.95h-4.79l.33-.95z"},  { label:"מחירון רכב",iconPath:"M8.501 2.02a3.73 3.73 0 013.27 3.41l.005.167c.008.333.017.666.025 1.043a.747.747 0 010 .26v.011c-.01.431-.026 1.129-.77 1.129-.76 0-.76-.62-.76-1.05V5.56a2.26 2.26 0 00-1.87-2l-1.34-.06a1.26 1.26 0 00-1.22 1.25v7a.75.75 0 01-1.5 0v-7A2.76 2.76 0 017.061 2l1.44.02zm13.3 12.54a2 2 0 00-1-.72l-.56-.17-.77-1.86a3 3 0 00-1.14-1.25 3 3 0 00-1.66-.5h-4.89a3 3 0 00-2 .73l-2.72 2.36a1.91 1.91 0 01-1 .46l-2.37.41a2 2 0 00-1.63 1.91l-.06 2A2 2 0 003.941 20h.42a2.73 2.73 0 005.4 0h4.6a2.73 2.73 0 005.4 0h.44a2 2 0 002-2v-2.2a2 2 0 00-.4-1.24zm-6.04-3h.91a1.49 1.49 0 011.38.92l.57 1.36h-2.86v-2.28zm-4 0a1.48 1.48 0 00-1 .37l-2.16 1.91h5.66v-2.28h-2.5zm-3.77 8.81c-.105.11-.226.205-.36.28l-.13.07a1.12 1.12 0 01-.88 0l-.13-.07a.861.861 0 01-.22-.15.86.86 0 01-.14-.13 1.275 1.275 0 01-.13-.19 1.19 1.19 0 01.68-1.79.94.94 0 01.76 0 1.19 1.19 0 01.68 1.79c-.037.067-.08.13-.13.19zm9.87.13c.046-.04.09-.084.13-.13.05-.06.093-.123.13-.19a1.19 1.19 0 00-.68-1.79.94.94 0 00-.76 0 1.19 1.19 0 00-.68 1.79c.038.067.081.13.13.19.106.11.227.205.36.28l.13.07c.281.12.6.12.88 0l.13-.07c.083-.04.16-.09.23-.15zm2.84-2.49a.51.51 0 01-.15.35.47.47 0 01-.35.15h-.6a2.75 2.75 0 00-5.08 0h-4.92a2.75 2.75 0 00-5.08 0h-.55a.5.5 0 01-.47-.52l.06-2a.53.53 0 01.12-.31.57.57 0 01.3-.17l1.51-.27v.06h14.85a.5.5 0 01.36.48v2.23zM14.061 2a.76.76 0 00-.75.75v4a.75.75 0 001.5 0v-4a.76.76 0 00-.75-.75zM7.534 5.177a.75.75 0 01.527-.227.75.75 0 01.74.74c.005.424.018.867.032 1.33.018.632.038 1.301.038 2.01V9.45a.76.76 0 01-.65.81h-.1a.72.72 0 01-.73-.61 2.14 2.14 0 010-.45v-.13c-.07-1.24-.07-2.36-.07-3.36a.75.75 0 01.213-.533z"},  { label:"מימון רכב",iconPath:"M4.75 20c0 .414.336.75.75.75h13a.75.75 0 00.75-.75V4a.75.75 0 00-.75-.75h-13a.75.75 0 00-.75.75v16zm1.5-.75V4.75h11.5v14.5H6.25zM8 9.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3V9.8zm.3-3.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h7.4a.3.3 0 00.3-.3V6.8a.3.3 0 00-.3-.3H8.3zM11 9.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3V9.8zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3V9.8a.3.3 0 00-.3-.3h-1.4zM8 12.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3v-1.4zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3h-1.4zm2.7.3a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3v-1.4zm-5.7 2.7a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3H8.3zm2.7.3a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3v-1.4zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3h-1.4z"}]
,
},
{
title: {isHalfRectangleNeeded:true, label: 'יד שניה', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M4.24 7.599C4.24 6.175 5.293 5 6.64 5h10.72c1.347 0 2.4 1.198 2.4 2.599v1.108h.46c.826 0 1.48.739 1.48 1.596v5.168c0 .857-.654 1.596-1.48 1.596h-.54v1.26c0 .574-.434 1.073-1 1.073h-2.02c-.567 0-1-.499-1-1.072v-1.261H8.34v1.26c0 .574-.434 1.073-1 1.073H5.32c-.567 0-1-.499-1-1.072v-1.261h-.54c-.827 0-1.48-.739-1.48-1.596v-5.168c0-.857.653-1.596 1.48-1.596h.46V7.6zm2.4-1.065c-.514 0-.96.46-.96 1.065v1.115c.759.078 1.34.78 1.34 1.589v1.588h4.48V6.534H6.64zm6.36 0v5.357h4v-1.588c0-.808.58-1.511 1.34-1.589V7.6c0-.604-.447-1.065-.96-1.065H13zm-9.242 3.72a.08.08 0 00-.018.049v5.168c0 .022.008.038.018.049.012.012.022.013.022.013h16.44c.01 0 .033-.006.056-.028.021-.02.023-.035.024-.035v-5.167a.068.068 0 00-.019-.049c-.011-.012-.02-.013-.021-.013h-1.78c-.004 0-.011.001-.021.013a.08.08 0 00-.02.049v2.355c0 .4-.313.767-.72.767H6.32c-.406 0-.72-.368-.72-.767v-2.355a.068.068 0 00-.018-.049c-.011-.012-.02-.013-.021-.013H3.78c-.004 0-.011.001-.022.013zM6.9 17.067H5.78v.777H6.9v-.777zm10.22 0v.777h1.12v-.777h-1.12z' },

subItems: [  { label:'כל המוצרים'},  { label:'מוצרי חשמל'},  { label:'ריהוט'},  { label:'עסקים למכירה'},  { label:'ספורט'},  { label:'סלולרי'},  { label:'לתינוק ולילד'},  { label:'הכל בחינם!'}, { label: 'קונסולות משחק'},  { label:'מחשבים וציוד נלווה'},  { label:'לגינה'},  { label:'אופנה וטיפוח'},  { label:'יד2 מכל הלב',iconPath:"M9.224 3.218c-.227.09-.407.214-.511.339a.387.387 0 00-.094.361c.038.186.199.524.72 1.005.41.376 1.008.81 1.858 1.299-.1-1.126-.335-1.939-.653-2.442-.187-.294-.383-.454-.573-.533-.18-.075-.419-.105-.747-.03zM12.5 4.787c-.151-.703-.377-1.315-.689-1.809-.312-.493-.728-.893-1.264-1.116-.539-.224-1.127-.24-1.73-.09l-.04.01-.04.016c-.404.151-.85.406-1.177.799a1.883 1.883 0 00-.41 1.627c.128.614.533 1.212 1.173 1.802a9.47 9.47 0 001.087.849H5a.75.75 0 00-.75.75v3.333c0 .415.336.75.75.75h.25v8.417c0 .414.336.75.75.75h13a.75.75 0 00.75-.75v-8.417H20a.75.75 0 00.75-.75V7.625a.75.75 0 00-.75-.75h-4.41c.43-.292.789-.575 1.087-.849.64-.59 1.045-1.188 1.173-1.802a1.883 1.883 0 00-.41-1.627c-.327-.393-.773-.648-1.177-.8l-.04-.014-.04-.01c-.603-.151-1.191-.135-1.73.09-.536.222-.952.622-1.264 1.115-.312.494-.538 1.106-.689 1.809zm-.8 5.421H5.75V8.375h5.95v1.833zm0 1.5H6.75v7.667h4.95v-7.667zm1.5 7.667v-7.667h5.05v7.667H13.2zm0-9.167V8.375h6.05v1.833H13.2zm3.087-6.651a1.307 1.307 0 00-.51-.34c-.33-.075-.568-.045-.747.03-.19.08-.387.239-.573.533-.319.503-.554 1.316-.654 2.442.85-.488 1.448-.923 1.857-1.3.522-.48.683-.818.721-1.004a.387.387 0 00-.094-.361z"}]
,
},
{
title:      {isHalfRectangleNeeded:true, label: 'IL דרושים ', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M10.5 7H14V5.5h-3.5V7zm5 0V4.75a.75.75 0 00-.75-.75h-5a.75.75 0 00-.75.75V7H4.75a.75.75 0 00-.75.75v11c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-11a.75.75 0 00-.75-.75H15.5zm-5.076 5.487L5.5 11.174V8.5H19v2.674l-4.924 1.313a.999.999 0 00-.826-.437h-2a.999.999 0 00-.826.437zm-.174 1.506L5.5 12.726V18H19v-5.274l-4.75 1.267v.057a1 1 0 01-1 1h-2a1 1 0 01-1-1v-.057z' },


subItems: [  { label:"חיפוש עבודה"},  { label:"פרסום משרות"},  { label:"כתיבת קורות חיים"},  { label:"אודות החברות"},  { label:"דרושים הייטק"},  { label:"דרושים סטודנטים"},  { label:"מגזין הקריירה"}, { label: "כספים"},  { label:"מכירות"},  { label:"שירות לקוחות"}, { label: "אדמיניסטרציה"}, { label: "מהנדסים"},  { label:"תחבורה"},  { label:"מסעדנות/תיירות"},  { label:"אבטחה"},  { label:"בריאות"},  { label:"בעלי מקצוע"},  { label:"הדרכה/הוראה"},  { label:"שיווק"}, { label: "לתחומים נוספים"}]
,
}
,
{
title: {isHalfRectangleNeeded:true, label: 'עסקים למכירה', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M20.476 6.133h-4.785V5.6c0-.882-.71-1.6-1.582-1.6H9.891c-.873 0-1.582.718-1.582 1.6v.533H3.527A.532.532 0 003 6.667V18.4c0 .882.71 1.6 1.582 1.6h14.836C20.29 20 21 19.282 21 18.4V6.678v-.002c-.02-.35-.233-.54-.524-.543zM9.363 5.6c0-.294.237-.533.528-.533h4.218c.291 0 .528.239.528.533v.533H9.363V5.6zm10.378 1.6l-1.638 4.969a.527.527 0 01-.5.364h-2.966V12a.53.53 0 00-.528-.533H9.891a.53.53 0 00-.528.533v.533H6.397a.527.527 0 01-.5-.364L4.259 7.2h15.482zm-6.159 5.333v2.134h-3.164v-2.134h3.164zm6.363 5.867a.531.531 0 01-.527.533H4.582a.531.531 0 01-.527-.533V9.953l.841 2.553a1.581 1.581 0 001.5 1.094h2.967v1.6a.53.53 0 00.528.533h4.218a.53.53 0 00.528-.533v-1.6h2.966c.682 0 1.285-.44 1.5-1.094l.842-2.553V18.4z' },
subItems: [  { label:'בתי קפה ומסעדות'},  { label:'זכיינות'}, { label: 'קווי חלוקה'},  { label:'הזדמנויות עסקיות'}, { label: 'מינימרקטים וסופרמרקטים'},  { label:'קיוסקים ופיצוציות'},  { label:'לכל העסקים'}]
,

},
{
title: {isHalfRectangleNeeded:true,  label: 'חיות מחמד', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M8.26 3a2.482 2.482 0 00-2.02 1.034l-5.054 6.084a.807.807 0 00-.186.516 3.19 3.19 0 003.178 3.194c.576 0 1.117-.155 1.583-.426v2.013a3.535 3.535 0 003.03 3.501A3.516 3.516 0 0012 21a3.515 3.515 0 003.208-2.084 3.534 3.534 0 003.03-3.5v-2.014c.467.27 1.008.426 1.584.426A3.19 3.19 0 0023 10.634a.807.807 0 00-.186-.516L17.76 4.033a2.483 2.483 0 00-.29-.332A2.483 2.483 0 0015.742 3H8.259zM7.5 5.02l.137-.164a.899.899 0 01.621-.25h7.482c.241 0 .46.096.622.251l.134.161a.905.905 0 01.147.495v9.902c0 1.061-.86 1.93-1.923 1.93a1.928 1.928 0 01-1.86-1.437c.178-.14.333-.323.46-.542l.68-1.184c.304-.53.345-1.11.075-1.58-.27-.469-.79-.722-1.396-.722h-1.36c-.607 0-1.126.253-1.396.722-.27.47-.23 1.05.075 1.58l.68 1.184c.127.219.282.402.46.542a1.928 1.928 0 01-1.86 1.436 1.928 1.928 0 01-1.923-1.929V5.511a.9.9 0 01.145-.49zm10.738 5.614v-3.52l3.144 3.785a1.587 1.587 0 01-1.561 1.322 1.587 1.587 0 01-1.583-1.587zm-14.06 1.587A1.587 1.587 0 012.616 10.9l3.144-3.784v3.519c0 .873-.708 1.587-1.583 1.587zM12 14.456l-.558-.97h1.116l-.558.97zm0 4.937a1.92 1.92 0 01-1.463-.676A3.532 3.532 0 0012 17.655c.385.47.888.84 1.463 1.062a1.92 1.92 0 01-1.463.676zM9.832 9.791c.599 0 1.084-.494 1.084-1.104 0-.61-.485-1.104-1.084-1.104-.598 0-1.083.494-1.083 1.104 0 .61.485 1.104 1.083 1.104zm5.42-1.104c0 .61-.486 1.104-1.085 1.104a1.094 1.094 0 01-1.083-1.104c0-.61.485-1.104 1.083-1.104.599 0 1.084.494 1.084 1.104z' },

subItems: [{ label:"כלבים"}, { label:"חתולים"}, { label:"תוכים ובעלי כנף"}, { label:"דגים"}, { label:"זוחלים"}, { label:"מכרסמים"}, { label:"סוסים"}, { label:"תרנגולים"}, { label:"חיות משק"}, { label:"חמוסים"}],
},{
title: {   isHalfRectangleNeeded:true,label: 'בעלי מקצוע', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M3.853 11.937a6.601 6.601 0 005.76 3.388 6.554 6.554 0 001.661-.218l.016.02 4.835 5.928a2.567 2.567 0 003.624.356l.312-.26a2.61 2.61 0 00.353-3.653l-4.836-5.928a1.442 1.442 0 00-.022-.027 6.703 6.703 0 00-1.15-7.45 6.573 6.573 0 00-7.058-1.696.87.87 0 00-.366 1.361l2.902 3.553L8.245 8.67 5.349 5.117a.855.855 0 00-1.396.1 6.709 6.709 0 00-.1 6.72zm3.49 1.096a4.953 4.953 0 01-2.446-5.737l2.565 3.14a.856.856 0 001.212.12l2.96-2.456a.867.867 0 00.12-1.22L9.188 3.74a4.865 4.865 0 014.207 1.784 4.969 4.969 0 01.014 6.244 4.873 4.873 0 01-6.067 1.266zm10.106 6.921l-4.457-5.465 1.631-1.36 4.464 5.466a.87.87 0 01-.117 1.218l-.312.26a.854.854 0 01-1.209-.119z' },

subItems: [{ label:"מכוני בדיקה ורישוי לרכב"}, { label:"רחיצת רכב"}, { label:"חומרי בניין"}, { label:"אינסטלטור"}, { label:"חשמלאים"}, { label:"שמאי מקרקעין"}, { label:"שיפוצים"}, { label:"הובלות"}, { label:"רהיטים"}, { label:"חברות ניקיון ואחזקה"}, { label:"לכל בעלי המקצוע"}],

},
{
  title: { isHalfRectangleNeeded:true, label: 'מגזין יד2', url: '/chat/v2/inbox?serviceInitiator=Header', iconPath: 'M21.167 5h-7.5c-.641 0-1.224.238-1.667.626A2.523 2.523 0 0010.333 5h-7.5A.823.823 0 002 5.813v12.375c0 .448.373.812.833.812h18.334c.46 0 .833-.364.833-.813V5.813A.823.823 0 0021.167 5zm-17.5 1.625h6.666c.46 0 .834.364.834.813v9.937h-7.5V6.625zm16.666 10.75h-7.5V7.437c0-.448.374-.812.834-.812h6.666v10.75zM18 8h-3a1 1 0 100 2h3a1 1 0 100-2zm-3 3h3a1 1 0 110 2h-3a1 1 0 110-2zm3 3h-3a1 1 0 100 2h3a1 1 0 100-2zM6 8h3a1 1 0 010 2H6a1 1 0 010-2zm3 3H6a1 1 0 100 2h3a1 1 0 100-2zm-3 3h3a1 1 0 110 2H6a1 1 0 110-2z' },

  subItems: [],

  }
];

export const topSidebarItems = [
  {
     title:{ isHalfRectangleNeeded:false,label: 'נדלן', url: '',iconPath:''  },
        ////<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.703 11.267a.25.25 0 01.024-.397L6.5 9.014a6.75 6.75 0 002.434-2.909l1.081-2.476a.25.25 0 01.393-.09l5.054 4.353a.25.25 0 01.027.351l-1.201 1.425a1.75 1.75 0 00.304 2.54l5.213 3.82a.25.25 0 01.053.351l-1.246 1.662a.25.25 0 01-.352.048l-5.43-4.153a1.75 1.75 0 00-2.365.221L9.144 15.63a.25.25 0 01-.35.022l-5.091-4.385zm-.81-1.645a1.75 1.75 0 00-.17 2.781l5.093 4.386a1.75 1.75 0 002.443-.157l1.322-1.471a.25.25 0 01.338-.032l5.43 4.153a1.75 1.75 0 002.463-.34l1.246-1.662a1.75 1.75 0 00-.366-2.462l-5.214-3.819a.25.25 0 01-.044-.363l1.202-1.425a1.75 1.75 0 00-.196-2.454l-5.054-4.353a1.75 1.75 0 00-2.745.625L7.559 5.505a5.25 5.25 0 01-1.893 2.263L2.893 9.622zm1.143 8.497a1 1 0 100 2h7.014a1 1 0 100-2H4.036z" fill="currentColor"></path></svg>
    subItems: [  { label:'דירות למכירה',url:'/realestate'},  { label:'דירות להשכרה'},  { label:'שותפים'},  { label:'מסחרי'},  { label:'חיפוש על גבי מפה'},  { label:'יד1 דירות חדשות'},  { label:'דורון - העוזר האישי',iconPathClass: 'doronSvg'},  { label:'כונס נכסים',iconPath:"M3.703 11.267a.25.25 0 01.024-.397L6.5 9.014a6.75 6.75 0 002.434-2.909l1.081-2.476a.25.25 0 01.393-.09l5.054 4.353a.25.25 0 01.027.351l-1.201 1.425a1.75 1.75 0 00.304 2.54l5.213 3.82a.25.25 0 01.053.351l-1.246 1.662a.25.25 0 01-.352.048l-5.43-4.153a1.75 1.75 0 00-2.365.221L9.144 15.63a.25.25 0 01-.35.022l-5.091-4.385zm-.81-1.645a1.75 1.75 0 00-.17 2.781l5.093 4.386a1.75 1.75 0 002.443-.157l1.322-1.471a.25.25 0 01.338-.032l5.43 4.153a1.75 1.75 0 002.463-.34l1.246-1.662a1.75 1.75 0 00-.366-2.462l-5.214-3.819a.25.25 0 01-.044-.363l1.202-1.425a1.75 1.75 0 00-.196-2.454l-5.054-4.353a1.75 1.75 0 00-2.745.625L7.559 5.505a5.25 5.25 0 01-1.893 2.263L2.893 9.622zm1.143 8.497a1 1 0 100 2h7.014a1 1 0 100-2H4.036z"},  { label:'הערכת שווי נכס',iconPath:"M4.75 20c0 .414.336.75.75.75h13a.75.75 0 00.75-.75V4a.75.75 0 00-.75-.75h-13a.75.75 0 00-.75.75v16zm1.5-.75V4.75h11.5v14.5H6.25zM8 9.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3V9.8zm.3-3.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h7.4a.3.3 0 00.3-.3V6.8a.3.3 0 00-.3-.3H8.3zM11 9.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3V9.8zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3V9.8a.3.3 0 00-.3-.3h-1.4zM8 12.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3v-1.4zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3h-1.4zm2.7.3a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3v-1.4zm-5.7 2.7a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3H8.3zm2.7.3a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3v-1.4zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3h-1.4z"},  { label:'משרדי תיווך בישראל',iconPath:"M12 4c.53 0 1.061.195 1.478.585l.035.034 7.261 7.1a.736.736 0 01.17.814.72.72 0 01-.652.464h-2.111v6.259a.745.745 0 01-.61.733l-.033.005-.095.006h-3.101a.745.745 0 01-.737-.713v-.031l-.001-3.907h-3.052v3.907a.745.745 0 01-.611.733l-.032.005-.096.006H6.478a.744.744 0 01-.737-.713v-6.29H3.738a.726.726 0 01-.663-.417.764.764 0 01-.072-.411.723.723 0 01.135-.349l.02-.027.068-.074 7.26-7.1A2.158 2.158 0 0112 4zm0 1.488a.694.694 0 00-.487.199L5.56 11.509h.918l.033.002a.745.745 0 01.699.648l.006.096v6.257h1.861v-3.907l.001-.033a.744.744 0 01.643-.705l.095-.006h4.526l.03.001c.192.008.365.09.492.217.133.135.215.321.215.526v3.907h1.627v-6.258l.001-.033a.745.745 0 01.643-.705l.096-.006.993-.001-5.952-5.822-.023-.021A.693.693 0 0012 5.488z"}]
    ,
},
{
title: {isHalfRectangleNeeded:false ,label: 'רכב', url: '/chat/v2/inbox?serviceInitiator=Header',iconPath:'' },

subItems:[  { label:"כל הרכבים"},  { label:"מסחרי"},  { label:"ג'יפים"},  { label:"אופנועים"},  { label:"קטנועים"},  { label:"מיוחדים"},  { label:"אביזרים"},  { label:"משאיות"},  { label:"כלי שייט"},  { label:"קטלוג רכבים",iconPath:"M20.5 9a1.36 1.36 0 00-.36.05v-.6a3 3 0 00-3-3h-6.52A3 3 0 009 6a3.07 3.07 0 00-1.16 1.32l-1 2.54a1 1 0 01-.72.6L3.45 11a2 2 0 00-1.14.69A2.07 2.07 0 001.87 13v2.48a2 2 0 002 2h.43a2.73 2.73 0 005.4 0h3.6a2.73 2.73 0 005.41-.09 2.001 2.001 0 001.43-1.91V15c.117.033.238.05.36.05A1.5 1.5 0 0022 13.5v-3A1.5 1.5 0 0020.5 9zM7.93 17.81c-.105.11-.227.205-.36.28l-.13.07a1.12 1.12 0 01-.88 0l-.13-.07a.861.861 0 01-.22-.15.865.865 0 01-.14-.13 1.275 1.275 0 01-.13-.19 1.19 1.19 0 01.68-1.79.94.94 0 01.76 0 1.19 1.19 0 01.68 1.79c-.038.067-.081.13-.13.19zm8.64.28c.133-.075.255-.17.36-.28.049-.06.092-.123.13-.19a1.19 1.19 0 00-.68-1.79.94.94 0 00-.76 0 1.19 1.19 0 00-.68 1.79c.037.067.08.13.13.19.105.11.227.205.36.28l.13.07c.281.12.599.12.88 0l.13-.07zm2.07-2.64a.51.51 0 01-.15.35 2.74 2.74 0 00-5 .13H9.54a2.75 2.75 0 00-5.08 0h-.59a.49.49 0 01-.36-.15.5.5 0 01-.14-.35V13a.49.49 0 01.39-.48l2.64-.56a2.52 2.52 0 001.81-1.54l1-2.53a1.54 1.54 0 01.55-.68 1.49 1.49 0 01.86-.21h6.52a1.47 1.47 0 011.06.44 1.5 1.5 0 01.44 1.06v6.95zm-8.98-3.79a1.1 1.1 0 00.79.18h6.05a1 1 0 00.71-.29 1 1 0 00.29-.73l-.08-2.43-.12-.26a1.17 1.17 0 00-.8-.24h-5.31c-.202.001-.4.06-.57.17a1.07 1.07 0 00-.37.48l-.83 2.39v.31c.052.154.133.297.24.42zm1.88-2.27H16v.95h-4.79l.33-.95z"},  { label:"מחירון רכב",iconPath:"M8.501 2.02a3.73 3.73 0 013.27 3.41l.005.167c.008.333.017.666.025 1.043a.747.747 0 010 .26v.011c-.01.431-.026 1.129-.77 1.129-.76 0-.76-.62-.76-1.05V5.56a2.26 2.26 0 00-1.87-2l-1.34-.06a1.26 1.26 0 00-1.22 1.25v7a.75.75 0 01-1.5 0v-7A2.76 2.76 0 017.061 2l1.44.02zm13.3 12.54a2 2 0 00-1-.72l-.56-.17-.77-1.86a3 3 0 00-1.14-1.25 3 3 0 00-1.66-.5h-4.89a3 3 0 00-2 .73l-2.72 2.36a1.91 1.91 0 01-1 .46l-2.37.41a2 2 0 00-1.63 1.91l-.06 2A2 2 0 003.941 20h.42a2.73 2.73 0 005.4 0h4.6a2.73 2.73 0 005.4 0h.44a2 2 0 002-2v-2.2a2 2 0 00-.4-1.24zm-6.04-3h.91a1.49 1.49 0 011.38.92l.57 1.36h-2.86v-2.28zm-4 0a1.48 1.48 0 00-1 .37l-2.16 1.91h5.66v-2.28h-2.5zm-3.77 8.81c-.105.11-.226.205-.36.28l-.13.07a1.12 1.12 0 01-.88 0l-.13-.07a.861.861 0 01-.22-.15.86.86 0 01-.14-.13 1.275 1.275 0 01-.13-.19 1.19 1.19 0 01.68-1.79.94.94 0 01.76 0 1.19 1.19 0 01.68 1.79c-.037.067-.08.13-.13.19zm9.87.13c.046-.04.09-.084.13-.13.05-.06.093-.123.13-.19a1.19 1.19 0 00-.68-1.79.94.94 0 00-.76 0 1.19 1.19 0 00-.68 1.79c.038.067.081.13.13.19.106.11.227.205.36.28l.13.07c.281.12.6.12.88 0l.13-.07c.083-.04.16-.09.23-.15zm2.84-2.49a.51.51 0 01-.15.35.47.47 0 01-.35.15h-.6a2.75 2.75 0 00-5.08 0h-4.92a2.75 2.75 0 00-5.08 0h-.55a.5.5 0 01-.47-.52l.06-2a.53.53 0 01.12-.31.57.57 0 01.3-.17l1.51-.27v.06h14.85a.5.5 0 01.36.48v2.23zM14.061 2a.76.76 0 00-.75.75v4a.75.75 0 001.5 0v-4a.76.76 0 00-.75-.75zM7.534 5.177a.75.75 0 01.527-.227.75.75 0 01.74.74c.005.424.018.867.032 1.33.018.632.038 1.301.038 2.01V9.45a.76.76 0 01-.65.81h-.1a.72.72 0 01-.73-.61 2.14 2.14 0 010-.45v-.13c-.07-1.24-.07-2.36-.07-3.36a.75.75 0 01.213-.533z"},  { label:"מימון רכב",iconPath:"M4.75 20c0 .414.336.75.75.75h13a.75.75 0 00.75-.75V4a.75.75 0 00-.75-.75h-13a.75.75 0 00-.75.75v16zm1.5-.75V4.75h11.5v14.5H6.25zM8 9.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3V9.8zm.3-3.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h7.4a.3.3 0 00.3-.3V6.8a.3.3 0 00-.3-.3H8.3zM11 9.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3V9.8zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3V9.8a.3.3 0 00-.3-.3h-1.4zM8 12.8a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3v-1.4zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3h-1.4zm2.7.3a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3v-1.4zm-5.7 2.7a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3H8.3zm2.7.3a.3.3 0 01.3-.3h1.4a.3.3 0 01.3.3v1.4a.3.3 0 01-.3.3h-1.4a.3.3 0 01-.3-.3v-1.4zm3.3-.3a.3.3 0 00-.3.3v1.4a.3.3 0 00.3.3h1.4a.3.3 0 00.3-.3v-1.4a.3.3 0 00-.3-.3h-1.4z"}]
,
},
{
title: {isHalfRectangleNeeded:false, label: 'יד שניה', url: '/chat/v2/inbox?serviceInitiator=Header',iconPath:''  },

subItems: [  { label:'כל המוצרים'},  { label:'מוצרי חשמל'},  { label:'ריהוט'},  { label:'עסקים למכירה'},  { label:'ספורט'},  { label:'סלולרי'},  { label:'לתינוק ולילד'},  { label:'הכל בחינם!'}, { label: 'קונסולות משחק'},  { label:'מחשבים וציוד נלווה'},  { label:'לגינה'},  { label:'אופנה וטיפוח'},  { label:'יד2 מכל הלב',iconPath:"M9.224 3.218c-.227.09-.407.214-.511.339a.387.387 0 00-.094.361c.038.186.199.524.72 1.005.41.376 1.008.81 1.858 1.299-.1-1.126-.335-1.939-.653-2.442-.187-.294-.383-.454-.573-.533-.18-.075-.419-.105-.747-.03zM12.5 4.787c-.151-.703-.377-1.315-.689-1.809-.312-.493-.728-.893-1.264-1.116-.539-.224-1.127-.24-1.73-.09l-.04.01-.04.016c-.404.151-.85.406-1.177.799a1.883 1.883 0 00-.41 1.627c.128.614.533 1.212 1.173 1.802a9.47 9.47 0 001.087.849H5a.75.75 0 00-.75.75v3.333c0 .415.336.75.75.75h.25v8.417c0 .414.336.75.75.75h13a.75.75 0 00.75-.75v-8.417H20a.75.75 0 00.75-.75V7.625a.75.75 0 00-.75-.75h-4.41c.43-.292.789-.575 1.087-.849.64-.59 1.045-1.188 1.173-1.802a1.883 1.883 0 00-.41-1.627c-.327-.393-.773-.648-1.177-.8l-.04-.014-.04-.01c-.603-.151-1.191-.135-1.73.09-.536.222-.952.622-1.264 1.115-.312.494-.538 1.106-.689 1.809zm-.8 5.421H5.75V8.375h5.95v1.833zm0 1.5H6.75v7.667h4.95v-7.667zm1.5 7.667v-7.667h5.05v7.667H13.2zm0-9.167V8.375h6.05v1.833H13.2zm3.087-6.651a1.307 1.307 0 00-.51-.34c-.33-.075-.568-.045-.747.03-.19.08-.387.239-.573.533-.319.503-.554 1.316-.654 2.442.85-.488 1.448-.923 1.857-1.3.522-.48.683-.818.721-1.004a.387.387 0 00-.094-.361z"}]
,
},
{
title:      {isHalfRectangleNeeded:false, label: 'IL דרושים ', url: '/chat/v2/inbox?serviceInitiator=Header',iconPath:''  },


subItems: [  { label:"חיפוש עבודה"},  { label:"פרסום משרות"},  { label:"כתיבת קורות חיים"},  { label:"אודות החברות"},  { label:"דרושים הייטק"},  { label:"דרושים סטודנטים"},  { label:"מגזין הקריירה"}, { label: "כספים"},  { label:"מכירות"},  { label:"שירות לקוחות"}, { label: "אדמיניסטרציה"}, { label: "מהנדסים"},  { label:"תחבורה"},  { label:"מסעדנות/תיירות"},  { label:"אבטחה"},  { label:"בריאות"},  { label:"בעלי מקצוע"},  { label:"הדרכה/הוראה"},  { label:"שיווק"}, { label: "לתחומים נוספים"}]
,
}
,
{
title: {isHalfRectangleNeeded:false, label: 'עסקים למכירה', url: '/chat/v2/inbox?serviceInitiator=Header',iconPath:''   },
subItems: [  { label:'בתי קפה ומסעדות'},  { label:'זכיינות'}, { label: 'קווי חלוקה'},  { label:'הזדמנויות עסקיות'}, { label: 'מינימרקטים וסופרמרקטים'},  { label:'קיוסקים ופיצוציות'},  { label:'לכל העסקים'}]
,

},
{
title: {isHalfRectangleNeeded:false,  label: 'חיות מחמד', url: '/chat/v2/inbox?serviceInitiator=Header',iconPath:''   },

subItems: [{ label:"כלבים"}, { label:"חתולים"}, { label:"תוכים ובעלי כנף"}, { label:"דגים"}, { label:"זוחלים"}, { label:"מכרסמים"}, { label:"סוסים"}, { label:"תרנגולים"}, { label:"חיות משק"}, { label:"חמוסים"}],
},{
  title: {   isHalfRectangleNeeded:false,label: 'בעלי מקצוע', url: '/chat/v2/inbox?serviceInitiator=Header',iconPath:'' },

  subItems: [{ label:"מכוני בדיקה ורישוי לרכב"}, { label:"רחיצת רכב"}, { label:"חומרי בניין"}, { label:"אינסטלטור"}, { label:"חשמלאים"}, { label:"שמאי מקרקעין"}, { label:"שיפוצים"}, { label:"הובלות"}, { label:"רהיטים"}, { label:"חברות ניקיון ואחזקה"}, { label:"לכל בעלי המקצוע"}],

  },
  {
    title: { isHalfRectangleNeeded:false, label: 'מגזין יד2', url: '/chat/v2/inbox?serviceInitiator=Header',iconPath:''  },

    subItems: [],

    }
////<a class="menu-category-item_navButton__TkWKt" href="/realestate/forsale"><span class="menu-category-item_mobileOnly__BhhDb menu-category-item_iconWrapper__CyqE1"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M12 4c.53 0 1.061.195 1.478.585l.035.034 7.261 7.1a.736.736 0 01.17.814.72.72 0 01-.652.464h-2.111v6.259a.745.745 0 01-.61.733l-.033.005-.095.006h-3.101a.745.745 0 01-.737-.713v-.031l-.001-3.907h-3.052v3.907a.745.745 0 01-.611.733l-.032.005-.096.006H6.478a.744.744 0 01-.737-.713v-6.29H3.738a.726.726 0 01-.663-.417.764.764 0 01-.072-.411.723.723 0 01.135-.349l.02-.027.068-.074 7.26-7.1A2.158 2.158 0 0112 4zm0 1.488a.694.694 0 00-.487.199L5.56 11.509h.918l.033.002a.745.745 0 01.699.648l.006.096v6.257h1.861v-3.907l.001-.033a.744.744 0 01.643-.705l.095-.006h4.526l.03.001c.192.008.365.09.492.217.133.135.215.321.215.526v3.907h1.627v-6.258l.001-.033a.745.745 0 01.643-.705l.096-.006.993-.001-5.952-5.822-.023-.021A.693.693 0 0012 5.488z" fill="currentColor"></path></svg></span><span>נדל״ן<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu-category-item_arrowIcon__sDxHe"><path d="M15.014 17.884a.75.75 0 01-.98 1.13l-.084-.073-6.137-6.18a.75.75 0 01-.069-.977l.073-.083 6.145-6.103a.75.75 0 011.13.98l-.073.085-5.613 5.573 5.608 5.648z" fill="currentColor"></path></svg></span></a>
];
export const finalMessageLines= [
  {
    class: "line1",
    style: "font-weight:bold;padding: 10px 0",
    spans: [
      { text: "שלום zd czczx," }
    ]
  },
  {
    class: "line2",
    style: "font-weight:bold",
    spans: [
      { text: "בדיקה קצרה של הצוות שלנו, והמודעה מיד תעלה" },
      { text: "ללוח נדל\"ן ." },
      { text: "לכל עניין, זה מספר המודעה שלך:", style: { "color": "#ff6600", "font-weight": "normal" } },
      { text: "55281543" }
    ]
  },
  {
    class: "line3",
    style: "padding: 10px 0;",
    spans: [
      { text: "בינתיים המודעה זמינה לצפייה ולעריכה באזור האישי" }
    ]
  }
];

export const finalLinks = [
  { href: "/publish/stage-1", class: "publishLink", text: "פרסום מודעה נוספת" },
  { href: "/personal/update", class: "homePageLink", text: "לאזור האישי" },
  { href: "", class: "homePageLink", text: "לדף הבית" }
];

export const adDescriptionSidebarItems = [
  {
     title:{ isHalfRectangleNeeded:false, label: 'מיזוג', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'snow' },

    subItems: [],
},
{
title: {isHalfRectangleNeeded:false, label: 'סורגים', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'table' },
subItems: [],
},
{
title: {isHalfRectangleNeeded:false, label: 'מעלית', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'elevator'},

subItems:[],
},
{
title:      {isHalfRectangleNeeded:false, label: 'מטבח כשר', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'sink'},


subItems: [],
}
,
{
title: {  isHalfRectangleNeeded:false,
  label: 'דוד שמש', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'solar' },
subItems:[],
},
{
title:{ isHalfRectangleNeeded:false, label: 'גישה לנכים', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'wheelchair' },

subItems: [],
},
{
title: {isHalfRectangleNeeded:false, label: 'משופצת', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'brush'},
subItems: [],
},
{
title: {isHalfRectangleNeeded:false, label: 'ממ"ד', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'home' },

subItems:[],
},
{
title:      {isHalfRectangleNeeded:false, label: 'מחסן', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'graze'},


subItems: [],
}
,
{
title: {  isHalfRectangleNeeded:false,
label: 'מזגן תדיראן', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'air-con' },
subItems:[],
},
{
title:{ isHalfRectangleNeeded:false, label: 'ריהוט', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'furniture' },

subItems: [],
},
{
title: {isHalfRectangleNeeded:false, label: 'יחידת דיור', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'home-icon' },
subItems: [],
},
{
title: {isHalfRectangleNeeded:false, label: 'גמיש', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'flexible' },

subItems:[],
},


];
export const settingSidebarItems = [
  {
     title:{ isHalfRectangleNeeded:false,label: 'צאט', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'chat'  },

},
{
title: {isHalfRectangleNeeded:false, label: 'התראות שלי', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'bell'  },


},
{
title: {isHalfRectangleNeeded:false ,label: 'מודעות שאהבתי', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'love' },


},

{
title:      {isHalfRectangleNeeded:false, label: 'חיפושים אחרונים', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'search'  },


}
,
{
title: {isHalfRectangleNeeded:false, label: 'השוואת רכבים', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'exchange'   },


},

];










export const fastSearchSidebarItems = [
  {
     title:{ isHalfRectangleNeeded:false,label: 'נדל"ן', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'home'  },

},
{
title: {isHalfRectangleNeeded:false, label: 'רכב', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'car'  },


},
{
title: {isHalfRectangleNeeded:false ,label: 'יד שנייה', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'sofa' },


},

{
title:      {isHalfRectangleNeeded:false, label: 'עסקים למכירה', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'suitcase'  },


}
,
{
title: {isHalfRectangleNeeded:false, label: 'דרושים IL', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'search'   },


},
{
  title: {isHalfRectangleNeeded:false, label: 'חיות מחמד', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'pet'   },


  },
];





export const filterItems = [

  {hasTree:true, newTreeData:  [  'מודעות מאושרות',  "מודעות לא מאושרות",  "מודעות לא פעילות",  "מודעות שלא בתוקף",  'מודעות בבדיקה',  "מודעה עסקית",  "ממתינה לבדיקה טלפונית",  "ממתין לאישור ההי”ל"],label: "סוג נכס", containerClass: "inputClass123", buttonText: "סטטוסים" ,checkBoxes:[{text:''}]},
  {hasTree:true, newTreeData:  [  'נדל״ן',  'רכב',  "יד שנייה",'בעלי חיים'],label: "סוג נכס", containerClass: "inputClass123", buttonText: "קטגוריה" ,checkBoxes:[{text:''}]},




];


export const UserInfoSidebarItems = [
  {
     title:{ isHalfRectangleNeeded:false,label: 'איזור אישי', url: '/personal/saved-ads',iconPathClass:'user'  },

},
{
title: {isHalfRectangleNeeded:false, label: 'השוואת רכבים', url: '/chat/v2/inbox?serviceInitiator=Header',iconPathClass:'compare-cars'  },


},
{
title: {isHalfRectangleNeeded:false ,label: 'חיפושים אחרונים', url: '/personal/last-searches',iconPathClass:'user-last-search' },


},

{
title:      {isHalfRectangleNeeded:false, label: 'התנתקות', url: '',iconPathClass:'disconnect-icon'  },


}

];


export const UserInfoDisSidebarItems = [
  {
     title:{ isHalfRectangleNeeded:false,label: 'איזור אישי', url: '/signIn',iconPathClass:'user'  },

},
{
title: {isHalfRectangleNeeded:false, label: 'השוואת רכבים', url: '/signIn',iconPathClass:'compare-cars'  },


},
{
title: {isHalfRectangleNeeded:false ,label: 'חיפושים אחרונים', url: '/signIn',iconPathClass:'user-last-search' },


},

];

export const typeOfProperty=[
  'כל סוגי הנכסים',
  'דירות',
  'דירה',
  'דירת גן',
  'גג/פנטהאוז',
  'דופלקס',
  'תיירות ונופש',
  'מרתף/פרטר',
  'טריפלקס',
  'יחידת דיור',
  'סטודיו/לופט',
  'בתים',
  'בית פרטי/קוטג\'',
  'דו משפחתי',
  'משק חקלאי/נחלה',
  'משק עזר',
  'סוגים נוספים',
  'מגרשים',
  'דיור מוגן',
  'בניין מגורים',
  'מחסן',
  'חניה',
  'קב\' רכישה/ זכות לנכס',
  'כללי'
]
