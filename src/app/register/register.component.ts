import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username:string;
  public password:string;
  public confirmpassword:string;

  constructor(private user:UserService) { }

  ngOnInit() {
  }

  Register() {

    this.user.registerUser({ 'username' : this.username, 'password' : this.password })

  }

}
