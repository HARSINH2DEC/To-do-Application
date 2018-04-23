import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { FormGroup, FormControl }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([

      {

        path : 'login',
        component : LoginComponent
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
