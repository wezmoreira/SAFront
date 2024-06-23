import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from 'src/app/models/comment/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private url: string = 'https://localhost:7080/api/';

  constructor(private http: HttpClient) {}

  addComment(body: CommentModel) {
    return this.http.post(`${this.url}v1/comments/new-comment`, body);
  }
}
