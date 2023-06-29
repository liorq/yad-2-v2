import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GovService {

obj={
   api_url : "https://data.gov.il/api/3/action/datastore_search",
 cities_resource_id : "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba",
 streets_resource_id :"a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3",
  city_name_key :"שם_ישוב",
 street_name_key : "שם_רחוב",
  cities_data_id : "cities-data",
 streets_data_id : "streets-data",
 street:'',
city:'',
streetList:[],
records:[]
}
 cities_input:any = document.getElementById("city-choice");


async getCities() {

this.populateDataList(  this.obj.cities_data_id,  this.obj.cities_resource_id,  this.obj.city_name_key,  undefined, 32000);

}



 getData(resource_id:string, q = "", limit:Number|string|undefined = "100") {
  return axios.get(this.obj.api_url, {
    params: { resource_id, q, limit },
    responseType: "json"
  });
};



filterCitiesHandler(event:any){
  this.obj.city = event.target.value;
  this.populateDataList(this.obj.streets_data_id, this.obj.streets_resource_id, this.obj.street_name_key, { שם_רחוב: this.cities_input.value }, 32000);
}


 populateDataList(id: string | undefined, resource_id: string, field_name: string, query: any, limit: number | string | undefined = "100") {
  const datalist_element = document.getElementById(id ?? "");
  if (!datalist_element) return;



 this.getData(resource_id, query, limit)
    .then(({ data: { result: { records } } }) => this.ResponseHandler(records, field_name))
    .then(html => datalist_element.innerHTML = html)
    .catch(error => console.log(`Couldn't get list for ${id} query: ${query}`, error));

////some code


  }


filterStreetHandler(event:any){
  this.obj.street=event.target.value;
  this.populateDataList(this.obj.streets_data_id, this.obj.streets_resource_id, this.obj.street_name_key, {}, 32000);
}


 ResponseHandler (records = [], field_name:string){
  if(this.obj.city!=""){
  this.obj.streetList=records.filter((c:any)=>c.שם_ישוב.trim()==this.obj.city);
  records=this.obj.streetList;
  }
  this.obj.records=records;
  const parsed =
    records
      .map((record) => `<option value="${String(record[field_name]).trim()}">`)
      .join("\n") || "";
  return Promise.resolve(parsed);
};
}
