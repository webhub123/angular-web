import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router : Router) { }

  registerUser(user) {

    this.http.post('api/v1/register', user) 
      .subscribe((res) => {
        this.router.navigate(['/login']);
    });
  } 
 
  login(user) {
    this.http.post('api/v1/login', user) 
      .subscribe((res : any) => {
        localStorage.setItem('token', res.token)
        window.location.href = '/admin'
    });
  }

  logout() {
    this.http.get('api/v1/logout') 
      .subscribe((res) => {
        localStorage.clear()
        window.location.href = '/login'
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  checkToken(err) {
    if(err instanceof HttpErrorResponse) 
    if(err.status === 401) 
      localStorage.clear()
      window.location.href = '/login';
  }

  
}
