import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { MyCardsComponent } from './components/pages/my-cards/my-cards.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { ViewCardComponent } from './components/pages/view-card/view-card.component';
import { AuthorizationGuard } from './_guard/authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-card',
    component: ViewCardComponent
  },
  {
    path: 'user',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        // canActivate: [AuthorizationGuard]
      },
      {
        path: 'cards',
        component: MyCardsComponent,
        // canActivate: [AuthorizationGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
