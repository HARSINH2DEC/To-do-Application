import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRouterModule} from './appRouter'
import { FormGroup, FormControl }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToDoAppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRouterModule
],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
