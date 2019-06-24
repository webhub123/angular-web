import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  list : List;

  constructor(private listServe : ListService) { 
    this.list = {
      name : '',
      age : null,
      address : ''
    }
  }

  ngOnInit() {}

  saveProf() {
    //console.log(this.list)
    this.listServe.saveProf(this.list)
  }

}
