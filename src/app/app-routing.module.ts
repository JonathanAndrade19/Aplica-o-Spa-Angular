import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'change-detection',
    component: ChangeDetectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
