import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MyCardsComponent } from './components/pages/my-cards/my-cards.component';
import { ViewCardComponent } from './components/pages/view-card/view-card.component';
import { ShowCardModalComponent } from './components/modal/show-card.modal/show-card.modal.component';
import { AddCardModalComponent } from './components/modal/add-card-modal/add-card-modal.component';
import { InterceptorService } from './services/security/interceptor.service';
import { EditProfileComponent } from './components/modal/profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    ProfileComponent,
    HomeComponent,
    MyCardsComponent,
    ViewCardComponent,
    ShowCardModalComponent,
    AddCardModalComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
