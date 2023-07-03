import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

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
  { path: '404', component: NotFoundPageComponent },

  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
