import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll()
  {
    return this._http.get("/api/pets/")
  }

  createOne(data)
  {
    return this._http.post("/api/pets/new", data)
  }

  getOne(id)
  {
    return this._http.get(`/api/pets/${id}`)
  }

  editOne(id, data)
  {
    return this._http.put(`/api/pets/${id}/edit`, data)
  }

  deleteOne(id)
  {
    return this._http.delete(`/api/pets/${id}`)
  }
}
