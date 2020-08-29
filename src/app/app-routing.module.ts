import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Quiz1Component } from './quiz1/quiz1.component';
import { QuiznameComponent } from './quizname/quizname.component';


const routes: Routes = [
  {
    path: "",
    component:  QuiznameComponent
  },
  {
    path: "quiz",
    component:  Quiz1Component
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
