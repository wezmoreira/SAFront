import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderService } from '../../request/header-service.service';
import { Observable } from 'rxjs';
import { PexelsResponse } from 'src/app/models/pexels/pexels-response.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private urlBase: string = 'https://api.pexels.com/v1/';
  private http: HttpClient;

  constructor(
    private header: HeaderService,
    private handler: HttpBackend,
  ) {
    this.http = new HttpClient(handler);
  }

  getHappyImagesPexels(
    page?: number,
    orientation?: string,
    size?: string,
  ): Observable<PexelsResponse> {
    let headerRequest = this.header.pexelAuthorization();
    let url = this.urlBase + 'search?query=happy';

    if (page) {
      url += '&page=' + page;
    }
    if (orientation) {
      url += '&orientation=' + orientation;
    }
    if (size) {
      url += '&size=' + size;
    }

    return this.http.get<PexelsResponse>(url, { headers: headerRequest });
  }

  getHopeImagesPexels(
    page?: number,
    orientation?: string,
    size?: string,
  ): Observable<PexelsResponse> {
    let headerRequest = this.header.pexelAuthorization();
    let url = this.urlBase + 'search?query=hope';

    if (page) {
      url += '&page=' + page;
    }
    if (orientation) {
      url += '&orientation=' + orientation;
    }
    if (size) {
      url += '&size=' + size;
    }

    return this.http.get<PexelsResponse>(url, { headers: headerRequest });
  }
}
