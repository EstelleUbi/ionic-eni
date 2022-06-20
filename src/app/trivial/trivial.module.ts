import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TrivialPageRoutingModule } from './trivial-routing.module';

import { InscriptionComponent } from '../inscription/inscription.component';
import { TrivialPage } from './trivial.page';
import { QuestionComponent } from '../question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrivialPageRoutingModule
  ],
  declarations: [TrivialPage, InscriptionComponent, QuestionComponent]
})
export class TrivialPageModule {}
