import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public name : string;


  constructor(private route: ActivatedRoute) { 

    
  }

  ngOnInit() {
    
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.name);
  }

}
