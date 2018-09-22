import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
_errors: string="";
_pet: any = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""}
  constructor(private _pets: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    let robs = this._route.paramMap;
    robs.subscribe(params=>this.getInfo(params.get('id')))
  }
  getInfo(id)
  {
    let obs = this._pets.getOne(id)
    obs.subscribe(data=>{
      if(data === null || 'kind' in data)
      {
        this._router.navigate(['/pets']);
      }
      else
      {
        this._pet = data;
      }
    })
  }

  editPet(_id)
  {
    let robs = this._pets.editOne(this._pet._id, this._pet);
    robs.subscribe(data=>{
      if('errors' in data)
      {
        this._errors=data['errors']['name']['message'];
      }else{
        this._router.navigate([`/pets/${this._pet._id}`]);
      }
    })
  }
}
