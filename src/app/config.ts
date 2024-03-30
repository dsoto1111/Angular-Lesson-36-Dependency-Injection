import { DairyService } from './dairy.service';
import { InjectionToken } from '@angular/core';

export const ffunc = (value: boolean) => {
    return new DairyService(value);
}

export type random = {
    movie_studio: string,
    movie: string
}

export const MOVIE_OBJECT: random = {
    movie_studio: 'Paramount',
    movie: 'Star Trek'
}

export const INJ_TOKEN = new InjectionToken<string>('');