import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http : HttpClient) { }
 
  public getPassword(email){
    return this.http.post("http://localhost:8080/users/getPassword",email,{responseType:'text'});
  }
}
