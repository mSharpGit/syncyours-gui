import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { IconsComponent } from './icons/icons.component';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule ,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS
} from '@angular/material';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ErrorHandler } from './services/error_handler';
import { RequestInterceptor } from './services/http_interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { CookieService } from 'ngx-cookie-service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { AuthGuard } from './services/auth.guard';


@NgModule({  
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NotificationsComponent,
    PageNotFoundComponent,
    VerifyUserComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
    SnackBarComponent,
  ],entryComponents:[ SnackBarComponent ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard ,ErrorHandler,
    NotificationsComponent,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    }, {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
