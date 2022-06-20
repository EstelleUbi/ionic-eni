import { Component, Input, OnInit } from '@angular/core';

@Component ({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    @Input() expectedProp: string;
    response = '';
    activeNext = false;

    constructor(){

    }
    ngOnInit(): void {
    }

    responseSelected(value: string){
        this.response = value;
        this.activeNext = true;
    }
}
