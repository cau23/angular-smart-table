import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	rosters: Table[];

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      age: {
        title: 'Age'
      }
    }
  };

  constructor(private tservice: TableService) { }

  ngOnInit() {
  	this
  		.tservice
  		.getRosters()
  		.subscribe((data: Table[]) => {
  			this.rosters = data;
  		});
  
	 }
  
	

}
