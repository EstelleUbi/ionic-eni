import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrivialPage } from './trivial.page';

const routes: Routes = [
    {
      path: '',
      component: TrivialPage,
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TrivialPageRoutingModule {}
