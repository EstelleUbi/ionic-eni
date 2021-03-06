import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FilmProvider } from '../providers/films.provider';

@Component ({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss']
})
export class RechercherComponent implements OnInit {
    public title = 'Gibli';
    public year = 2000;
    public type = 'movie';
    public error = '';
    public films = [];

    constructor(private alertCrlt: AlertController, private filmProvider: FilmProvider) {

    }

    ngOnInit(): void {
    }

    async rechercher(){
        this.error = '';

        if (!this.title || this.title.length < 3){
            const alert = await this.alertCrlt.create({
                header: 'Information manquante',
                message: 'Veuillez saisir un titre de plus de 3 caractères'
            });
            alert.present();
            return;
        }

        if (!this.year || (this.year < 1900 || this.year > 2022)) {
            this.error = 'Veuillez saisir une année entre 1900 et 2022.';
            return;
        }

        if (!this.type) {
            this.error = 'Veuillez saisir un type de média.';
            return;
        }
        // fin des contrôle de surface
        this.lancerRecherche();
    }

    private lancerRecherche(){
        this.filmProvider.search(this.title, this.year, this.type).then((result) => {
            this.films = result.slice(4, 10);
        }).catch(async (err) => {
            const alert = await this.alertCrlt.create({
                header: 'Impossible de charger les films',
                message: 'Le serveur n\'a pas renvoyé de films.'
            });
            alert.present();
        });
    }
}
