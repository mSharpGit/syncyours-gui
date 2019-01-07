import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syncyours';
  cookieValue = 'UNKNOWN'
  constructor(
    private cookieService: CookieService
   ) { 
    this.cookieService.set( 'cookiekeeploged', 'true' );
    this.cookieValue = this.cookieService.get('cookiekeeploged');
    console.log('is Confirmed', this.cookieValue)
    this.cookieService.set( 'cookieUserId', '1' );
    this.cookieValue = this.cookieService.get('cookieUserId');
    console.log('is Confirmed', this.cookieValue)

    const cookieExists: boolean = cookieService.check('test');
    console.log('is test', cookieExists)
    const allCookies: {} = cookieService.getAll();
    console.log('all cook', allCookies)
     //httpOptions.headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
     }
}
