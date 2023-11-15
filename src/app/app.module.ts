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
import { UserButtonComponent } from './components/molecules/user-button/user-button.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { HelpButtonComponent } from './components/molecules/help-button/help-button.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/atoms/card/card.component';
import { CardSectionComponent } from './components/organisms/home-sections/card-section/card-section.component';
import { HowSectionComponent } from './components/organisms/home-sections/how-section/how-section.component';
import { HomeTemplateComponent } from './components/templates/home-template/home-template.component';
import { BeSitterComponent } from './components/organisms/home-sections/be-sitter/be-sitter.component';
import { ReportsSectionComponent } from './components/organisms/home-sections/reports-section/reports-section.component';
import { InfoCardComponent } from './components/molecules/info-card/info-card.component';
import { ReportCardComponent } from './components/molecules/report-card/report-card.component';
import { FooterComponent } from './components/organisms/footer/footer.component';

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
    UserButtonComponent,
    HeaderComponent,
    HelpButtonComponent,
    HomeComponent,
    CardComponent,
    CardSectionComponent,
    HowSectionComponent,
    HomeTemplateComponent,
    BeSitterComponent,
    ReportsSectionComponent,
    InfoCardComponent,
    ReportCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
