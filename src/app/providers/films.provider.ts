import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from 'src/app/models/film';

@Injectable()
export class FilmProvider {
    constructor(private http: HttpClient){}

    public search(title: string, year: number, type: string): Promise<Array<any>>{
        return new Promise(async (resolve, reject) => {
            try{
                let params = new HttpParams();
                params = params.append('apikey', '745e523e');
                params = params.append('s', title);
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
}
