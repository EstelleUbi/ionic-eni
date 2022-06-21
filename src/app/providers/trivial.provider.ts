/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class OpenTriviaService {

    constructor(){}

    public getQuestions(nbQuestions: number, difficulty: string): Promise<Array<Question>>{
        return new Promise((resolve, reject) => {
            resolve([{
                category: 'Entertainment: Japanese Anime & Manga',
                type: 'multiple',
                difficulty: 'easy',
                question: 'Quel est le nom du chevalier ?',
                correct_answer: 'The Salamander',
                incorrect_answers: ['The Dragon Slayer', 'The Dragon', 'The Demon']
                },
                {
                category: 'Entertainment: Video Games',
                type: 'boolean',
                difficulty: 'medium',
                question: 'Est ce qu\'il a vaincu le dragon ?',
                correct_answer: 'False',
                incorrect_answers: ['True']
                }
               ]);
        });
    }

}
