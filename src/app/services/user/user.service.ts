import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResult } from 'src/app/models/generic-result.model';
import { UserModel } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://localhost:7080/api/user/';

  constructor(private http: HttpClient) {}

  getUser(): Observable<GenericResult> {
    return this.http.get<GenericResult>(`${this.url}account/v1`);
  }

  getUserById(id: string): Observable<GenericResult> {
    return this.http.get<GenericResult>(`${this.url}account/${id}/v1`);
  }

  updateUser(data: any): Observable<GenericResult> {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== '')
    );
  
    const payload = {
      UpdatedFields: filteredData
    };
    console.log('payload', payload);
    return this.http.put<GenericResult>(`${this.url}account-update/v1`, payload);
  }
}
