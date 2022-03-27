import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url="";
  constructor(private http:HttpClient) { }

  register(userdata:any){

   return  this.http.post<any>(this._url,userdata);

  }
}
