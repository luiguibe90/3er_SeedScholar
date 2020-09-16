import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classroom } from '../models/Classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  API_URI = 'http://3.236.100.191:3000/system'
  constructor(private http: HttpClient) { }
  getCredentials( USER:string, PASS: string){
    return this.http.get(`${this.API_URI}/login/${USER}/${PASS}`);
  }
  getClassroom(){
    return this.http.get(`${this.API_URI}/classroom/`);
  }
  getClassroomByBuilding(id: number){
    return this.http.get(`${this.API_URI}/classroom/${id}`);
  }
  getCampusById(id: number,idB:number){
    return this.http.get(`${this.API_URI}/campus/${id}/${idB}`);
  }
  updateLoginDate(USER: string){
    return this.http.put(`${this.API_URI}/login/${USER}`, null);
  }
  createClassroom(camp: Classroom){
    return this.http.post(`${this.API_URI}/classroom/`,camp);
  }
  updateClassroom(camp: Classroom,id:number){
    return this.http.put(`${this.API_URI}/classroom/${id}`,camp);
  }
  deleteClassroom(id:number){
    return this.http.delete(`${this.API_URI}/classroom/${id}`);
  }
}
