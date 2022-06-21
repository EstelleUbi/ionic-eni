import { Component } from '@angular/core';

@Component({
  selector: 'app-trivial',
  templateUrl: 'trivial.page.html',
  styleUrls: ['trivial.page.scss'],
})
export class TrivialPage {
  public activeQuestion = false;
  public pseudo = '';
  public difficulty = '';

  constructor() {}

  onFormCompleted(eventData: { success: boolean; pseudo: string; difficulty: string }) {
    this.activeQuestion = eventData.success;
    this.pseudo = eventData.pseudo;
    this.difficulty = eventData.difficulty;
  }

}
