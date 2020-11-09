import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './layouts/welcome/welcome.component'

const routes: Routes = [{ path: '', component: WelcomeComponent }, { path: "get-user-form/:userId", component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
