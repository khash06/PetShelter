import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
errors: String="";
wrong: string="";
wrongs: string="";
_pet = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""}
  constructor(private _rasc: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  makePet()
  {
    let obs = this._rasc.createOne(this._pet)
    obs.subscribe(data=>{
      console.log(data);
      if('errors' in data)
      {
        this.errors=data['errors'];

      }else{
        this._router.navigate(['/pets'])
      }
    })
  }
}
