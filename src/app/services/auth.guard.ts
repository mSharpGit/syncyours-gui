import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { isNumber } from 'util';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  

  constructor(
    public usersService: UsersService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
        if (this.cookieService.get('cookieConfirmed') && isNumber(this.cookieService.get('cookieUserId'))){
            this.usersService.notifyUser('User can login','top' ,'center')
            this.usersService.getCurrentUser(Number(this.cookieService.get('cookieUserId')))
            .then(user => {
                this.router.navigate(['/adminPortal']);
                return resolve(false);
              }, err => {
                return resolve(true);
              }) } 
            //return resolve(true);
        /* else{
            this.usersService.notifyUser('User cannot login','center','top')
            return resolve(false);
        } */

      /* this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/adminPortal']);
        return resolve(false);
      }, err => {
        return resolve(true);
      }) */
    })
  }
  
  canActivateChild(): Promise<boolean> {
   return new Promise((resolve, reject) => {
    return resolve(true);
      /* this.usersService.getCurrentUser()
      .then(user => {
        return resolve(true);
      }, err => {
        this.router.navigate(['/login']);
        return resolve(false);
      }) */
    })
  }
}