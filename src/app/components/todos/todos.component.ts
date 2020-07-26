import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/information';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
//
export class TodosComponent implements OnInit {

  personalList:Data[];

  constructor() { }

  ngOnInit(): void {
    {
      this.personalList = [
        {
          id:1,
          title:"name",
        },
        {
          id:2,
          title:"name2",
        }
      ]
    }
  }
}
