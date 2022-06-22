import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from 'src/app/models/film';

@Injectable()
export class FilmProvider {
    constructor(private http: HttpClient){}

    public search(title: string, year: number, type: string): Promise<Array<Film>>{
        return new Promise(async (resolve, reject) => {
            try{
                const response = await this.http.get('https://ghibliapi.herokuapp.com/films').toPromise();
                console.log(response);
                if (response){
                    resolve(response as any);
                }else{
                    reject('Impossible de comprendre la réponse serveur.');
                }
            }catch(err){
                console.log(err);
                reject('Impossible de retourner la réponse.');
            }
        });
    }

    public details(id: string): Promise<Film>{
        return new Promise (async (resolve, reject) => {
            try {
                let params = new HttpParams();
                params = params.append('id', id);
                const response = await this.http.get('https://ghibliapi.herokuapp.com/films', {params}).toPromise();
                if (response){
                    const film = new Film();
                    film.description = response[0].description;
                    film.title = response[0].title;
                    film.release_date = response[0].release_date;
                    film.image = response[0].image;
                    resolve(film);
                } else {
                    reject('Impossible de retourner la réponse.');
                }
            }catch(err){
                reject('Impossible de retourner la réponse.');
            }
        });
    }
}
