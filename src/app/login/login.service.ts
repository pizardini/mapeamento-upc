import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serverUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient) { }

  login(login: string, password: string) {
    return this.http.post(this.serverUrl, {login, password})
  }
}
