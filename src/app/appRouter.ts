import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGroup, FormControl }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';



export const appRoutes: Routes = [

    { path:'Login' , component: LoginComponent},
    {path:'ToDoApp' , component: ToDoAppComponent}
    
]



@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule],
  
})
export class AppRouterModule { }
