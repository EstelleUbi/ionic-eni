import { Injectable } from '@angular/core';
import { Film } from 'src/app/models/film';

@Injectable()
export class FilmProvider {
    constructor(){}

    public search(title: string, year: number, type: string): Promise<Array<Film>>{
        return new Promise((resolve, reject) => {
            resolve([{
                title: 'Film 1',
                year: 1952,
                poster: 'assets/icon/favicon.png',
                type: 'movie',
            },
            {
                title: 'Film 2',
                year: 2004,
                poster: 'assets/icon/favicon.png',
                type: 'movie',
            },
            {
                title: 'Film 3',
                year: 1997,
                poster: 'assets/icon/favicon.png'
            }]);
        });
    }
}
