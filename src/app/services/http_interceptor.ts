import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
 
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/do';
 
import { ErrorHandler } from './error_handler';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
 
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
 
  constructor(
    public errorHandler : ErrorHandler,
  ) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {}, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              //console.log(err.message)
              this.errorHandler.handleError(err);
            }}));
  }
}