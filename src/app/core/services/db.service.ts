import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apartment, apartmentSearchQuery, user, userUpdateRequest } from "src/app/data/interfaces";
@Injectable({
  providedIn: "root",
})
export class DbService {
  url = "https://localhost:7132/";

  constructor(private http: HttpClient) {}

  async getAllAds() {
    try {
      const res = await this.http.get(this.url + "api/Apartment").toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }
  async removeAd(ad: apartment) {
    try {
      const res = await this.http.delete(this.url + "api/Apartment/removeApartments", {
        headers: this.getHttpHeader(),
        body: ad
      }).toPromise();
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async findApartments(query: apartmentSearchQuery) {
    try {
      const res = await this.http.post(this.url + "api/Apartment/SearchApartments",query, {
        headers: this.getHttpHeader(),

      }).toPromise();
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  async getAllMyAds() {
    try {
      const res = await this.http.get(this.url + "api/Apartment/myApartments", {headers: this.getHttpHeader()}).toPromise();
      console.log(res)
      return res;
    } catch (err) {
      console.log(err)

      return err;
    }
  }
  ////working on
  async getAllMySearches() {
    try {
      const res = await this.http.get(this.url + "api/Apartment/mySearches", {headers: this.getHttpHeader()}).toPromise();
      console.log(res)
      return res;
    } catch (err) {
      console.log(err)

      return err;
    }
  }

  async getAllMyLikedAds() {
    try {
      const res = await this.http.post(this.url + "api/Apartment/myApartments/likedApartments",null,
       {headers: this.getHttpHeader()} ).toPromise();
      // console.log(res);
      return res;
    } catch (err) {
      // console.log(err);
      return err;
    }
  }
  async getAllApartmentImages(apartmentId: string) {
    try {
      const res = await this.http
        .get(this.url + `api/Apartment/images/${apartmentId}`)
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }
  async getAllRangeAd(page: number) {
    try {
      const res = await this.http
        .get(this.url + `api/Apartment/${page}`)
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }


  async addCommentToLikedApartment(apartmentLikedId: string, comment: string) {
    try {
      const res = await this.http
        .post(this.url + `api/Apartment/myApartments/likedApartments/${apartmentLikedId}/${comment}`,null, {
          headers: this.getHttpHeader(),
        })
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }






  async toggleLikedAdd(apartmentId: string, isUserLikedAd: boolean) {
    try {
      const res = await this.http
        .post(this.url + `api/Apartment/LikedApartment/${apartmentId}/${isUserLikedAd}`,null, {
          headers: this.getHttpHeader(),
        })
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }

  async addAd(a: apartment | any) {
    console.log(a);

    try {
      const res = await this.http
        .post(this.url + "api/Apartment", a, { headers: this.getHttpHeader() })
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }
  async signUp(u: user) {

    u.firstName = "guest";
    u.lastName = "guest";
    console.log(u);
    try {
      const res = await this.http
        .post(this.url + "api/Account", u, { headers: this.getHttpHeader() })
        .toPromise();

        if(res){
          const result=await this.signIn(u)
          return result;
        }
      return res;
    } catch (err) {
      return err;
    }
  }
  async updateUserInfo(userUpdateRequest:userUpdateRequest) {
    console.log(userUpdateRequest)
    try {
      const res = await this.http
        .post(this.url + `api/Account/update`,userUpdateRequest, {
          headers: this.getHttpHeader(),
        })
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }
  ///duplicate
  async getUserObject() {
    try {
      const res = await this.http
        .get(this.url + `api/Account`, {
          headers: this.getHttpHeader(),
        })
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }
  async signIn(u: user) {
    console.log(u);
    ///tokenNeeded
    try {
      const res = await this.http
        .post(this.url + "api/Account/login", u, {
          headers: this.getHttpHeader(),
        })
        .toPromise();
      return res;
    } catch (err) {
      return err;
    }
  }

  getHttpHeader() {
    const token = localStorage.getItem("token") || "";
    return new HttpHeaders().set("Authorization", token);
  }
}
