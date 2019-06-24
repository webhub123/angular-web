import { UserService } from './user.service';
import { List } from './../interfaces/list';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, 
    private router : Router, 
    private user : UserService) { }

  getProfs() : Observable<List[]> {
    return this.http.get<List[]>('api/v1/lists');

  }

  getProf(id): Observable<List[]> {
    return this.http.get<List[]>('api/v1/list/'+id);
  }

  saveProf(list) {
    this.http.post('api/v1/store', list) 
      .subscribe((res) => {
        this.router.navigate(['/list']);
    },
    err => { 
      this.user.checkToken(err)
    });
  }

  updateProf(id, list) {
    this.http.put('api/v1/update/'+id, list, this.httpOptions) 
      .subscribe(res => {
        this.router.navigate(['/list']);
      },
      err => { 
        this.user.checkToken(err)
      });
  }

  removeProf(id){
    this.http.delete('api/v1/delete/'+ id) 
      .subscribe(res => {
        Swal.fire({
          title: 'Successfully Removed.',
          text: "",
          type: 'success',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.value) {
            window.location.href = '/list'  
          }
        })
    },
    err => { 
      this.user.checkToken(err)
    });

    

  }

}
