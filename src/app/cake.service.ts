import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  uri = 'http://localhost:4000/cakes';
  constructor(private http: HttpClient) { }

  getCakes() {
    return this.http.get(`${this.uri}`);
  }

  addCake(CakeFlavour, CakeTier, CakeImage) {
    const obj = {
      CakeFlavour,
      CakeTier,
      CakeImage
    };
    console.log(obj);
    this
      .http
      .post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('done'));
  }

  editCake(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateCake(CakeFlavour, CakeImage, CakeTier, id) {
    const obj = {
      CakeFlavour,
      CakeImage,
      CakeTier
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCake(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
