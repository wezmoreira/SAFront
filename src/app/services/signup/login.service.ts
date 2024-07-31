import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { GenericResult } from 'src/app/models/generic-result.model';
import { UserSignup } from 'src/app/models/user-signup/user-signup.model';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<GenericResult>(`${this.url}/account/login/v1`, data);
  }
}
