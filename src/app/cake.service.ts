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
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('done'));
  }
}
