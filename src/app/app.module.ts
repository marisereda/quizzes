import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { RouterModule } from '@angular/router';
import { DifficultyBarComponent } from './components/difficulty-bar/difficulty-bar.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';

import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ButtonComponent,
    ErrorComponent,
    HomePageComponent,
    PlayPageComponent,
    QuizCardComponent,
    DifficultyBarComponent,
    FinishPageComponent,
    StatisticsPageComponent,
    HeaderComponent,
    NotFoundPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
