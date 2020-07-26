import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/models/information';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.css']
})
export class TodosItemsComponent implements OnInit {

  @Input() redeclareData: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
