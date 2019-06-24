import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  login() {

    this.user.login({'username' : this.username, 'password' : this.password})
  }

  logOut() {
    this.user.logout()
  }
}
