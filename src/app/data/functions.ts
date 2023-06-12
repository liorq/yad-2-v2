
export function getCurrentDay(){
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const year = currentDate.getFullYear();

  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
return formattedDate
}
export function  getUpdatedLoaderData(textBoxValue:string){
  return [{class:"text-loader",ngIf:textBoxValue.length==0,text:"ממליצים לך בחום להוסיף תיאור"},
{class:"text-loader",ngIf:textBoxValue.length!=0&&textBoxValue.length<30,text:"מרגיש לנו שהטקסט שכתבת קצר מידי"},
{class:"text-loader",ngIf:textBoxValue.length>=30&&textBoxValue.length<60,text:"יופי, המודעה הולכת לכיוון נכון"},
{class:"text-loader",ngIf:textBoxValue.length<=100&&textBoxValue.length>60,text:"עוד ממש קצת וזה שם"},
{class:"text-loader",ngIf:textBoxValue.length<=130&&textBoxValue.length>100,text:"אוטוטו"},
{class:"text-loader",ngIf:textBoxValue.length>=131,text:"בול!"}]
}
export function getTipsAndInfoNgClass(activeBtn:string) {
  return {
    car: activeBtn === 'car',
    home: activeBtn === 'home',
    yad2: activeBtn === 'yad2'
  };
}
export function getCarNgClass(activeBtn:string) {
  return {
    carOn: activeBtn === 'car',
    carOff: activeBtn !== 'car'
  };
}

export function getHomeNgClass(activeBtn:string) {
  return {
    homeOn: activeBtn === 'home',
    homeOff: activeBtn !== 'home'
  };
}

export function getYad2NgClass(activeBtn:string) {
  return {
    yad2On: activeBtn === 'yad2',
    yad2Off: activeBtn !== 'yad2'
  };
}
export function getTabsNgClass(activeBtn:string,homeNgClass:any,carNgClass:any,yad2NgClass:any) {
  return [
    { id: 'home', title: 'נדל״ן', iconClass: homeNgClass },
    { id: 'car', title: 'רכב', iconClass: carNgClass },
    { id: 'yad2', title: 'יד שנייה', iconClass: yad2NgClass },
  ];

}

export function  getPropertySaleTipsArray(ActiveBtn:string){
return [
  {
               classWrapper:'yad2_tipsWrapper__K5Z2V',ngIf:ActiveBtn == 'home',classTitle:'yad2-title',titleText:' מכירת נכס הינו הליך רגיש וארוך מרגע הפרסום ועד סגירת העסקה. גם כאן נמצאים רמאים שיכולים ליצור עוגמת נפש רבה, הנה מידע שיכול לעזור לך להמנע ממקרים כאלה'
,
    array:[
                    {
                      num: 1,
                      text: 'הרמאות הנפוצה ביותר היא רמאים המתחזים למתווכים ומציעים למכור בשבילך את הנכס',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },

                    {
                      num: 2,
                      text: ' אם ברצונך למכור את הנכס באמצעות יועץ נדלן, מה שהופך את כל חווית המכירה לנעימה יותר, מומלץ לבחור יועץ מוסמך בעל תעודה והסמכה רשמיים',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 3,
                      text: ' רוכשים אשר מעוניינים להעביר סכום כסף גדול באופן מיידי באמצעות     אדם שלישי או הפקדה לשירות צד שלישי, הינם רוכשים שצריך מייד לבחון כלא מהימנים',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 4,
                      text: 'רוכש מהימן הינו רוכש השואל שאלות, קובע פגישה ומשקיע זמן רב ובבחינת ההצעה הכללית',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 5,
                      text: 'ליד2 אין חלק בהעברת הכסף. אם מוצג לכם קישור לאתר, צילום מסך או כל מסמך אחר שמציג זאת - דחו את העסקה',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 6,
                      text: 'כדאי להשתמש בצ׳אט של יד2 בשביל תקשורת בין קונה למוכר, הוא סגור ובטוח יותר',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 7,
                      text: ' לעולם לא לשלוח חשבון בנק לצורך העברת סכום כלשהו לחשבונך',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 8,
                      text: ' אם מנסים לדחוק אותך למכירה, על אף שההרגשה הפנימית לא טובה כלפי הרוכש, חסמו את המספר דרכו מבוצעת ההתקשרות',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    }
                  ]
                },{

            classWrapper:'yad2_tipsWrapper__K5Z2V',ngIf:ActiveBtn == 'car',classTitle:'yad2-title',titleText:'רכישת רכב הוא הליך ארוך שמעורב בו הרבה כסף ועל כן לוקח זמן עד  שמוצאים רוכש מתאים. גם כאן צריך לקחת כל עסקה כחשודה, עד שההרגשה הפנימית אומרת אחרת'
                  ,
                  array:[
                    {
                      num: 1,
                      text: 'נורת אזהרה צריכה להידלק כשמתעניין רוצה לרכוש את הרכב בלי לבחון אותו',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },

                    {
                      num: 2,
                      text: 'רוכש פוטנציאלי ישאל שאלות, יתחקר אותך על מצב הרכב אך רמאי ימעיט בשאלות אלו',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 3,
                      text: 'להיות חשדניים כאשר הקונה המתעניין מציע שאדם שלישי יגיע לאסוף ולשלם על הרכב',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 4,
                      text: 'לא לאשר את המכירה על שום מסמך פיזי או דיגיטלי, גם אם מדובר על אישור מכירה עקרוני תוך כדי שיחה באפליקציית מסרים בה התכתבתם',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 5,
                      text: 'מתעניינים רבים יסעו רחוק בכדי לרכוש רכב במיוחד אם מדובר על רכב נחשק, אך אם מדובר על רכב שגרתי שרבים כמותו קיימים באתר והרוכש נוסע מאות קילומטרים עד אליך, כדאי לנהוג במשנה זהירות',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 6,
                      text: 'החלפת בעלות על רכב תתבצע רק לאחר שהכסף נכנס לחשבון והתקבל אישור על כך מהבנק עצמו',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 7,
                      text: ' לעולם לא לשלוח חשבון בנק לצורך העברת סכום כלשהו לחשבונך',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 8,
                      text: ' אם מנסים לדחוק אותך למכירה, על אף שההרגשה הפנימית לא טובה כלפי הרוכש, חסמו את המספר דרכו מבוצעת ההתקשרות',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    }
                  ]



                },

       {classWrapper:'yad2_tipsWrapper__K5Z2V',ngIf:ActiveBtn == 'yad2',classTitle:'yad2-title',titleText:' במוצר יד שנייה הכסף עובר ידיים מהר, לרוב בזמן מפגש ולאחרונה גם באמצעות אפליקציה כגון ביט או פייבוקס.'
                  ,array:[
                    {
                      num: 1,
                      text: ' התייחסו בחשדנות ושמרו על ערנות בכל פנייה המגיעה דרך וואטסאפ.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },

                    {
                      num: 2,
                      text: ' יש לבחון את המספר ממנו התקבלה ההודעה ולוודא שהמספר מתחיל בקדומת ישראל 972+.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 3,
                      text: 'גם אם תשלח תמונה של תעודת זהות, נהגו בחשדנות.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 4,
                      text: ' מומלץ לדחות כל בקשה להעביר את הכסף בנקאית, באמצעות שליח או     חברת שליחויות, במיוחד אם הקונה מבקש להעביר אליכם את העלויות  ומציע שישלם מאוחר יותר סכום גדול יותר שיכלול גם את עלות  המשלוח.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 5,
                      text: ' אם הרוכש אינו יכול להגיע לאסוף, ומבקש שהמוצר ישלח לו, אנו ממליצים לשלוח או למסור את המוצר אך ורק לאחר שקיבלתם את מלוא הסכום עבורו.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 6,
                      text: 'קיבלתם שיק? שלחו את המוצר רק לאחר הפקדתו וקבלת אישור שהסכום הופקד בחשבון',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 7,
                      text: 'שימו לב, ליד2 אין חלק בהעברת הכסף וגם אין לה שירותי שליחויות. אם מוצג לכם קישור לאתר, צילום מסך או כל מסמך אחר שמציג זאת או מציע שירות כזה מטעם יד2 - דחו את העסקה.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 8,
                      text: 'אם מוצג לכם צילום מסך של העברה (בנקאית או באמצעות אפליקצייה  כמו ביט ופייבוקס) המתינו עם מסירת המוצר עד לקבלת הודעת התשלום מהאפליקצייה עצמה.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 9,
                      text: 'כדאי להשתמש בצ׳אט של יד2 בשביל תקשורת בין קונה למוכר, הוא סגור ובטוח יותר.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    },
                    {
                      num: 10,
                      text: ' נהגו בחשדנות כלפי פונים שמספרים סיפורים קורעי לב כדוגמת קרוב  המשפחה שתקוע בחו׳׳ל וזקוק לעזרתכם המיידית.',
                      classBottomDiv: 'tip-item_sample__Nng2j',
                      classText: 'tip-item_description__JP_ty',
                      classNum: 'tip-item_name__fMoMx',
                      classLine: 'tip-item_strip__qRLcD',
                      bigContainer: 'tip-item_tipWrapper__7E64D'
                    }
                  ]
                }
]




}
export function getAdsArray(flexible:string,dateOfEntering:string,porch:string,parking:String)
{
 return [

  {num:'מצב הנכס',text:'במצב שמור',numClass:'little-num',textClass:'little-text',containerClass:'top-right'},

  {num:'תאריך כניסה',text:flexible?'כניסה גמישה':dateOfEntering,numClass:'little-num',textClass:'little-text',containerClass:'top-left'},
  {num:'מרפסות',text:porch,numClass:'little-num',textClass:'little-text',containerClass:'bottom-right'},
  {num:'חניות',text:parking,numClass:'little-num',textClass:'little-text',containerClass:'bottom-left'},

]
}
