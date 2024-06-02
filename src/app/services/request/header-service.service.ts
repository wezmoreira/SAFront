import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private pexelKey: string =
    'jCnz5ZGuPqqzGazDoJTwcw3kf2xGvVMEoiodC8aDBrwuIahTgFRg2VJ5';
  private header: HttpHeaders = new HttpHeaders();

  constructor() {}

  pexelAuthorization(): HttpHeaders {
    return this.header.set('Authorization', this.pexelKey);
  }
}
