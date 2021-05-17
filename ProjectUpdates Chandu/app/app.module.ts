import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployComponent } from './employ/employ.component';
import { LoginComponent } from './login/login.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { EmployReactiveComponent } from './employ-reactive/employ-reactive.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent,
  children : [
  {path:'employ',component:EmployComponent,outlet:'data'},
  {path:'login',component:LoginComponent,outlet:'data'},
  {path:'employ-reactive',component:EmployReactiveComponent,outlet:'data'},
  {path:'login-reactive',component:LoginReactiveComponent,outlet:'data'},
  ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployComponent,
    LoginComponent,
    LoginReactiveComponent,
    EmployReactiveComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }