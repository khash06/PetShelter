import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dataSource;
displayedColumns = ['name', 'type', 'actions'];

  constructor(private _pets: HttpService) { }

  ngOnInit() {
    this.getPetsfromService();
  }

  getPetsfromService()
  {
    let obs = this._pets.getAll();
    obs.subscribe(data => {
      this.dataSource = data;    
    })
  }
}
