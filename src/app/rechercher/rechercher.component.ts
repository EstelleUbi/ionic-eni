import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss']
})
export class RechercherComponent implements OnInit {
    public title = '';
    public year: number;
    public type = '';
    public error = '';
    public films = [];

    constructor() {

    }

    ngOnInit(): void {
    }

    rechercher(){
        this.error = '';

        if (!this.title || this.title.length < 3){
            this.error = 'Veuillez saisir un titre de plus de 3 caractères.';
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
        this.films = [{
            title: 'Film 1',
            year: 1952,
            poster: 'assets/icon/favicon.png'
        },
        {
            title: 'Film 2',
            year: 2004,
            poster: 'assets/icon/favicon.png'
        },
        {
            title: 'Film 3',
            year: 1997,
            poster: 'assets/icon/favicon.png'
        }];
    }
}
