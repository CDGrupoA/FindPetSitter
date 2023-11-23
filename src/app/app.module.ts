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
import { RegisterTemplateComponent } from './components/templates/register-template/register-template.component';
import { RegisterCardComponent } from './components/organisms/register-card/register-card.component';
import { RegisterFormComponent } from './components/molecules/register-form/register-form.component';
import { InputNameSurnameComponent } from './components/atoms/input-name-surname/input-name-surname.component';
import { InputCheckboxComponent } from './components/atoms/input-checkbox/input-checkbox.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchTemplateComponent } from './components/templates/search-template/search-template.component';
import { InputSectionComponent } from './components/organisms/search-sections/input-section/input-section.component';
import { ResultSectionComponent } from './components/organisms/search-sections/result-section/result-section.component';
import { SitterCardComponent } from './components/molecules/sitter-card/sitter-card.component';
import { SearchInputComponent } from './components/molecules/search-input/search-input.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ReserveCardComponent } from './components/organisms/reserve-card/reserve-card.component';
import { DateSelectorComponent } from './components/molecules/date-selector/date-selector.component';
import { SitterTagsComponent } from './components/molecules/sitter-tags/sitter-tags.component';
import { ClientReportComponent } from './components/molecules/client-report/client-report.component';
import { PerfilTemplateComponent } from './components/templates/perfil-template/perfil-template.component';
import { StarComponent } from './components/atoms/star/star.component';
import { InfoSectionComponent } from './components/organisms/profileSections/info-section/info-section.component';
import { RatingSectionComponent } from './components/organisms/profileSections/rating-section/rating-section.component';
import { RatingCardComponent } from './components/molecules/rating-card/rating-card.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { PopupComponent } from './components/molecules/popup/popup.component';
import { ReserveConfirmationComponent } from './pages/reserve-confirmation/reserve-confirmation.component';

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
    RegisterTemplateComponent,
    RegisterCardComponent,
    RegisterFormComponent,
    InputNameSurnameComponent,
    InputCheckboxComponent,
    SearchComponent,
    SearchTemplateComponent,
    InputSectionComponent,
    ResultSectionComponent,
    SitterCardComponent,
    SearchInputComponent,
    PerfilComponent,
    ReserveCardComponent,
    DateSelectorComponent,
    SitterTagsComponent,
    ClientReportComponent,
    PerfilTemplateComponent,
    StarComponent,
    InfoSectionComponent,
    RatingSectionComponent,
    RatingCardComponent,
    UserSettingsComponent,
    PopupComponent,
    ReserveConfirmationComponent,
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
