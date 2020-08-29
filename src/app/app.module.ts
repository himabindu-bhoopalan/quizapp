import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuiznameComponent } from './quizname/quizname.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    QuiznameComponent,
    Quiz1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
