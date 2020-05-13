import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public loginAdmin(admin): Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
    return this.http.post("http://localhost:8080/admin/authenticate",admin,httpOptions);
  }

  public saveAuthorizationToken(token: string){
    localStorage.setItem('authToken',token);
  }

  public get getToken(): string{
    return localStorage.getItem('authToken');
  }
  public welcome(token){
    console.log("token: " +token);
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization' : 'Bearer $this.getToken'
      })
    };
    return this.http.get("http://localhost:8080/",httpOptions);
  }

}
