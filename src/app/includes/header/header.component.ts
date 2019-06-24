import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { MiddlewareGuard } from 'src/app/middleware.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private user : UserService, private auth : MiddlewareGuard) { }

  ngOnInit() {
  }

}
