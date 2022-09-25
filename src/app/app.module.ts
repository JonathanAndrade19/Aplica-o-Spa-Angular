import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// @angulat/material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
// Components Project
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { MyChildComponent } from './change-detection/my-child/my-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlunosComponent,
    ChangeDetectionComponent,
    MyChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
