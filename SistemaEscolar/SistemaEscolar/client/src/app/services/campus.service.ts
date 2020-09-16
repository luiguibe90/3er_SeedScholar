import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campus } from '../models/Campus';

@Injectable({
  providedIn: 'root'
})
export class CampusService {
  API_URI = 'http://3.236.100.191:3000/system'
  constructor(private http: HttpClient) { }

  getCredentials( USER:string, PASS: string){
    return this.http.get(`${this.API_URI}/login/${USER}/${PASS}`);
  }
  getCampus(){
    return this.http.get(`${this.API_URI}/campus/`);
  }
  getCampusById(id: number){
    return this.http.get(`${this.API_URI}/campus/${id}`);
  }
  updateLoginDate(USER: string){
    return this.http.put(`${this.API_URI}/login/${USER}`, null);
  }
  createCampus(camp: Campus){
    return this.http.post(`${this.API_URI}/campus/`,camp);
  }
  updateCampus(camp: Campus,id:number){
    return this.http.put(`${this.API_URI}/campus/${id}`,camp);
  }
  deleteCampus(id:number){
    return this.http.delete(`${this.API_URI}/campus/${id}`);
  }
}
