import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(username : string, password : string){
    let options = {
      headers: new HttpHeaders().set("Content-type","application/json")
    }
    let params = new HttpParams().set("username",username).set("password",password);
    return this.http.post("http://localhost:8080/api/auth/signin",params,options);
  }
}
