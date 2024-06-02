import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResult } from 'src/app/models/generic-result.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "https://localhost:7080/api/";

  constructor(private http: HttpClient) { }

  getUser() : Observable<GenericResult>{
    return this.http.get<GenericResult>(`${this.url}user/account/v1`);
  }
}
