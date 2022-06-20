import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component ({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
    @Output() formCompleted = new EventEmitter<{ success: boolean; pseudo: string }>();
    public pseudo = '';
    public difficulty = '';
    public save = false;
    public error = '';

    constructor(){

    }
    ngOnInit(): void {
    }

    controlBeforeStart(){
        this.error = '';

        if(!this.pseudo || this.pseudo.length < 3){
            this.error = 'Veuillez renseigner un pseudo de plus de 3 caractères.';
            return;
        }

        if(!this.difficulty){
            this.error = 'Veuillez renseigner un niveau de difficulté.';
            return;
        }

        this.updateScreen();

    }

    private updateScreen() {
        this.formCompleted.emit({ success: true, pseudo: this.pseudo });
    }
}

