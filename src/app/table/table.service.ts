// Network request code 
// Import this file in table.component.ts
//call service file's function
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  getRosters() {
    return this
            .http
            .get(`${this.url}/rosters`);
        }
}