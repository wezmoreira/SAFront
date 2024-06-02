import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewCard } from 'src/app/models/card/new-card.model';
import { ImagesService } from '../external/images/images.service';
import { PexelsResponse } from 'src/app/models/pexels/pexels-response.model';
import { Observable, map } from 'rxjs';
import { PexelsPhoto } from 'src/app/models/pexels/pexels-photo.model';

@Injectable({
  providedIn: 'root',
})
export class CardUtils {
  constructor(private imageService: ImagesService) {}

  public async createNewCard(form: FormGroup): Promise<NewCard> {
    const newCard = new NewCard();
    newCard.title = form.value.titulo;
    newCard.description = form.value.descricao;

    const imageHappy = await this.sortHappyImages();
    const image = await this.sortHopeImages();
    newCard.imageLarge = image.src.large;
    newCard.imageLandscape = image.src.landscape;
    newCard.imageOriginal = image.src.original;
    newCard.imagePortrait = imageHappy.src.portrait;
    newCard.imageTiny = image.src.tiny;

    return newCard;
  }

  public async sortHopeImages(): Promise<PexelsPhoto> {
    const pagina = this.getRandomNumber(1, 10);
    const imagem = this.getRandomNumber(1, 15);

    return new Promise<PexelsPhoto>((resolve, reject) => {
      this.imageService.getHopeImagesPexels(pagina).subscribe({
        next: (response: PexelsResponse) => {
          resolve(response.photos[imagem]); // refatorar
        },
        error: (err) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }

  public async sortHappyImages(): Promise<PexelsPhoto> {
    const pagina = this.getRandomNumber(1, 10);
    const imagem = this.getRandomNumber(1, 15);

    return new Promise<PexelsPhoto>((resolve, reject) => {
      this.imageService.getHappyImagesPexels(pagina).subscribe({
        next: (response: PexelsResponse) => {
          resolve(response.photos[imagem]); // refatorar
        },
        error: (err) => {
          console.log(err);
          reject(err);
        },
      });
    });
  }

  // public async sortHopeImages(): Promise<string> {
  //     const pagina = this.getRandomNumber(1, 10);
  //     const imagem = this.getRandomNumber(1, 15);

  //     return new Promise<string>((resolve, reject) => {
  //         this.imageService.getHopeImagesPexels(pagina).subscribe({
  //         next: (response: PexelsResponse) => {
  //             resolve(response.photos[imagem].src.large); // refatorar
  //         },
  //         error: (err) => {
  //             console.log(err);
  //             reject(err);
  //         }
  //         });
  //     });
  // }

  public getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
