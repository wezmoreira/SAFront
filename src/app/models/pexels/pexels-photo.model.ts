import { IPhoto } from "src/app/interfaces/pexels/photo.interface";

export class PexelsPhoto implements IPhoto {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: { 
        original: string; 
        large2x: string; 
        large: string; 
        medium: string; 
        small: string; 
        portrait: string; 
        landscape: string; 
        tiny: string; 
    };
    liked: boolean;
    alt: string;

    constructor(
        ){
        this.id = 0;
        this.width = 0;
        this.height = 0;
        this.url = '';
        this.photographer = '';
        this.photographer_url = '';
        this.photographer_id = 0;
        this.avg_color = '';
        this.src = {
            original: '',
            large2x: '',
            large: '',
            medium: '',
            small: '',
            portrait: '',
            landscape: '',
            tiny: ''
        };
        this.liked = false;
        this.alt = '';
    }
  
}
  