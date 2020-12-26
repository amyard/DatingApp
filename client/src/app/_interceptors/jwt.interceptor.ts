import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../models/user';
import { take, takeLast } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currectUser: User;

    //pipe(take(1)) - take only one element
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => currectUser = user);

    if(currectUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currectUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
