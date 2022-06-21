import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component ({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss', './../trivial/trivial.page.scss']
})
export class InscriptionComponent implements OnInit {
    @Output() formCompleted = new EventEmitter<{ success: boolean; pseudo: string }>();
    public pseudo = 'Tely';
    public difficulty = 'easy';
    public save = false;

    constructor(private alertCtrl: AlertController){

    }
    ngOnInit(): void {
    }

    async controlBeforeStart(){

        if(!this.pseudo || this.pseudo.length < 3){
            const alert = await this.alertCtrl.create({
                header: 'Informations erronées',
                message: 'Veuillez renseigner un pseudo de plus de 3 caractères.'
            });
            alert.present();
            return;
        }

        if(!this.difficulty){
            const alert = await this.alertCtrl.create({
                header: 'Informations erronées',
                message: 'Veuillez indiquer une difficulté.'
            });
            alert.present();
            return;
        }

        this.updateScreen();

    }

    private updateScreen() {
        this.formCompleted.emit({ success: true, pseudo: this.pseudo });
    }
}

