import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //   let modifiedRequest = req.clone({
    //       params:req.params.append('auth','this.authService.token')
    //   })
    // console.log('Sending Request interceptor');
    // return next.handle(modifiedRequest);
    let url = req.url;

    if (this.authService.userDetails?.idToken) {
      url = url + '?auth=' + this.authService.userDetails?.idToken;
    }

    let modifiedrequest = req.clone({
      url: url,
    });

    return next.handle(modifiedrequest);
  }
}
