import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { GenericResult } from 'src/app/models/generic-result.model';
import { UserSignup } from 'src/app/models/user-signup/user-signup.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = 'https://localhost:7080/api/';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<GenericResult>(`${this.url}account/login/v1`, data);
  }
}
