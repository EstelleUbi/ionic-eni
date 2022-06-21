import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Question } from '../models/question';
import { OpenTriviaService } from '../providers/trivial.provider';

@Component ({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss', './../trivial/trivial.page.scss']
})
export class QuestionComponent implements OnInit {
    @Input() pseudo: string;
    @Input() difficulty: string;
    activeNext: boolean;
    numeroQuestion: number;
    questions: Array<Question>;
    activeQuestion: Question;
    endGame: boolean;
    point: number;
    score: boolean;

    constructor(private alertCrlt: AlertController, private ctrl: OpenTriviaService){}

    ngOnInit(): void {
       this.startGame();
    }

    startGame(){
        this.ctrl.getQuestions(2, this.difficulty)
        .then((result) => {
            this.questions = result;
            this.point = 0;
            this.endGame = false;
            this.numeroQuestion = 0;
            this.activeNext = false;
            this.score = false;

            this.loadQuestion();
        })
        .catch(async (err) => {
            const alert = await this.alertCrlt.create({
                header: 'Impossible de charger les questions',
                message: 'Le serveur n\'a pas renvoyé de questions.'
            });
            alert.present();
        });
    }

    resultat(){
        this.score = true;
    }

    questionSuivante(){
        this.activeNext = false;
        this.numeroQuestion++;
        this.loadQuestion();
    }

    checkResponse(value: any){
        this.activeNext = true;
        if(value.correct){
            this.point++;
        }

        if(this.numeroQuestion >= this.questions.length - 1){
            this.activeNext = false;
            this.endGame = true;
        }
    }

    private loadQuestion(){
        this.activeQuestion = this.questions[this.numeroQuestion];
        this.activeQuestion.all_answers = [];

        for(const a of this.activeQuestion.incorrect_answers){
            this.activeQuestion.all_answers.push({
                answer: a,
                correct: false
            });
        }

        this.activeQuestion.all_answers.push({
            answer: this.activeQuestion.correct_answer,
            correct: true
        });
        console.log(this.activeQuestion);
    }
}
