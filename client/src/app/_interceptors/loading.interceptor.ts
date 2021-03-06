import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BusyService} from "../_services/busy.service";
import {delay, finalize} from "rxjs/operators";

// combine spinner service with displaying on page
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.busy();
    return next.handle(request).pipe(
      delay(1000), // time delay - how much time will display the spinner
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}
