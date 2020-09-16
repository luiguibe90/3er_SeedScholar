import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Building } from '../models/Building';


@Injectable({
  providedIn: 'root'
})
export class BuildingServiceService {
  API_URI = 'http://3.236.100.191:3000/system'
  constructor(private http: HttpClient) { }
  getCredentials(USER: string, PASS: string) {  
    return this.http.get(`${this.API_URI}/login/${USER}/${PASS}`);
  }
  getBuilding() {
    return this.http.get(`${this.API_URI}/bulging/`);
  }
  getBuilgingByCampus(id: number) {
    return this.http.get(`${this.API_URI}/building/${id}`);
  }
  getBuilgingById(id: number,idB: Number) {
    return this.http.get(`${this.API_URI}/building/${id}/${idB}`);
  }
  updateLoginDate(USER: string) {
    return this.http.put(`${this.API_URI}/login/${USER}`, null);
  }
  createBuilding(camp: Building){
    return this.http.post(`${this.API_URI}/building/`,camp);
  }
  updateBuilding(camp: Building,id:number){
    return this.http.put(`${this.API_URI}/building/${id}`,camp);
  }
  deleteBuilding(id:number){
    return this.http.delete(`${this.API_URI}/building/${id}`);
  }
  
}
