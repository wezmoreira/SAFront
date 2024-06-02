import { IPhoto } from './photo.interface';

export interface IPexelsResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: any[];
  next_page: string;
}
