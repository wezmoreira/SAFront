import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { UserSignup } from 'src/app/models/user-signup/user-signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupDataService {

  private url: string = "https://localhost:7080/api/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registerUser(data: any){
    return this.http.post(`${this.url}signup/v1`, data);
  }
}
