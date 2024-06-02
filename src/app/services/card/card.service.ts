import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardPrincipal } from 'src/app/models/card-principal.model';
import { NewCard } from 'src/app/models/card/new-card.model';
import { GenericResult } from 'src/app/models/generic-result.model';
import { UserSignup } from 'src/app/models/user-signup/user-signup.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private url: string = "https://localhost:7080/api/";

  constructor(private http: HttpClient) { }

  getCards() : Observable<GenericResult>{
    return this.http.get<GenericResult>(`${this.url}v1/cards/principal`);
  }

  addCard(body: NewCard) : Observable<NewCard>{
    return this.http.post<NewCard>(`${this.url}v1/cards/new-card`, body);
  }
}