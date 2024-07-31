import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from 'src/app/models/comment/comment.model';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addComment(body: CommentModel) {
    return this.http.post(`${this.url}new-comment`, body);
  }

  getComments() {
    return this.http.get(`${this.url}/load-comments`);
  }
}
