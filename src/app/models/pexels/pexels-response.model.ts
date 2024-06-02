import { IPexelsResponse } from 'src/app/interfaces/pexels/pexels-response.interface';
import { PexelsPhoto } from './pexels-photo.model';

export class PexelsResponse implements IPexelsResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  next_page: string;

  constructor() {
    this.total_results = 0;
    this.page = 0;
    this.per_page = 0;
    this.photos = [];
    this.next_page = '';
  }
}
