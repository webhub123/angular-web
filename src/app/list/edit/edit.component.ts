import { List } from './../../interfaces/list';
import { ActivatedRoute } from '@angular/router';
import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';

import { map } from "rxjs/operators";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private id : string;
  list : List[] = [];


  constructor(private ListServ : ListService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.ListServ.getProf(this.id)
      .subscribe(res => this.list = res)   
  }
 
  updateProf() {
    this.ListServ.updateProf(this.id, this.list)
  }

}
