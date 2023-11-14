import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environment/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { HyperlinkComponent } from './components/atoms/hyperlink/hyperlink.component';
import { H2Component } from './components/atoms/h2/h2.component';
import { LoginFormComponent } from './components/molecules/login-form/login-form.component';
import { InputComponent } from './components/atoms/input/input.component';
import { AuthButtonsComponent } from './components/molecules/auth-buttons/auth-buttons.component';
import { LoginCardComponent } from './components/organisms/login-card/login-card.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { RegisterTemplateComponent } from './components/templates/register-template/register-template.component';
import { RegisterCardComponent } from './components/organisms/register-card/register-card.component';
import { RegisterFormComponent } from './components/molecules/register-form/register-form.component';
import { InputNameSurnameComponent } from './components/atoms/input-name-surname/input-name-surname.component';
import { InputCheckboxComponent } from './components/atoms/input-checkbox/input-checkbox.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ButtonComponent,
    HyperlinkComponent,
    H2Component,
    LoginFormComponent,
    InputComponent,
    AuthButtonsComponent,
    LoginCardComponent,
    LoginTemplateComponent,
    RegisterTemplateComponent,
    RegisterCardComponent,
    RegisterFormComponent,
    InputNameSurnameComponent,
    InputCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
