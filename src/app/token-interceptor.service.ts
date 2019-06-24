import { UserService } from './service/user.service';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector : Injector) { }

  intercept(req, next) {

    let userServe = this.injector.get(UserService)
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${userServe.getToken()}`
      }
    })

    return next.handle(tokenizedReq)

  }


}
