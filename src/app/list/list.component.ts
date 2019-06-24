import { UserService } from './../service/user.service';
import { HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { List } from './../interfaces/list';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  list : List[];

  constructor(private listServe : ListService, private user : UserService) { }

  ngOnInit() {

    this.getLists()
  }

  getLists() {
    this.listServe.getProfs()
      .subscribe(res => {
          this.list = res
      },
      err => { 
        this.user.checkToken(err)
      });
  }

  removeProf(id){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to recover this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {

        this.listServe.removeProf(id)

      }
    })

    
  }

}
