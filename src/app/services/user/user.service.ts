import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResult } from 'src/app/models/generic-result.model';
import { UserModel } from 'src/app/models/user/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUser(): Observable<GenericResult> {
    return this.http.get<GenericResult>(`${this.url}/user/account/v1`);
  }

  getUserById(id: string): Observable<GenericResult> {
    return this.http.get<GenericResult>(`${this.url}/user/account/${id}/v1`);
  }

  updateUser(data: any): Observable<GenericResult> {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== ''),
    );

    const payload = {
      UpdatedFields: filteredData,
    };
    console.log('payload', payload);
    return this.http.put<GenericResult>(
      `${this.url}/user/account-update/v1`,
      payload,
    );
  }
}
