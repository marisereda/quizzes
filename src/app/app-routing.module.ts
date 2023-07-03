import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'quiz/:quizId/:difficulty',
    component: PlayPageComponent,
  },
  {
    path: 'quiz-results',
    component: FinishPageComponent,
  },
  {
    path: 'statistics',
    component: StatisticsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
