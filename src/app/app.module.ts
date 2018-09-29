import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileEditComponent } from './file-edit/file-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NoSpecialCharsDirective } from './no-special-chars.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FileEditComponent,
    PageNotFoundComponent,
    UserFormComponent,
    NoSpecialCharsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
