import { Injectable } from '@angular/core';
import { ISession } from '../models/School';
import { Session } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class LoginService{

  private _session: Session;
  constructor() { }

  setsession(value){
    this._session = value;
  }

  getsession(){
    return this._session;
  }
}
