/* eslint-disable @typescript-eslint/naming-convention */
export class Question {
    public category: string;
    public type: string;
    public difficulty: string;
    public question: string;
    public correct_answer: string;
    public incorrect_answers: Array<string>;
    public all_answers?: Array<any>;
}
