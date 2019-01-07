import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'portal/:id',
    loadChildren: './portal/portal.module#PortalModule'
    , canActivateChild: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'resetpass', component: ResetPasswordComponent },
  { path: 'resetpass/:id/:code', component: NewPasswordComponent },
  { path: 'verifyuser/:id/:code', component: VerifyUserComponent },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
