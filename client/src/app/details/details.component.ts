import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
_pet: any = {name: "", type: "", description: "", skill1: "", skill2: "", skill3: ""} 
  constructor(private _dawg: HttpService, private _router: Router, private _actrouter: ActivatedRoute) { }

  ngOnInit() {
    let robs = this._actrouter.paramMap;
    robs.subscribe(params=>this.getInfo(params.get('id')))
  }
getInfo(id)
{
  let obs = this._dawg.getOne(id)
  obs.subscribe(data=>{
    if(data === null || 'kind' in data)
    {
      this._router.navigate(['/pets'])
    }else{
      this._pet = data;
    }
  })
}

deleteOne(id)
{
  let cobs = this._dawg.deleteOne(id)
  cobs.subscribe(data=>{
    if(data['status'] == 'bad')
    {
      console.log('fail');
      this.ngOnInit();
    }else{
      this.ngOnInit();
    }
  })
}
}
