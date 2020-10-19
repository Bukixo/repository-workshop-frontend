import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  uri = 'https://my-json-server.typicode.com/Bukixo/cakeServer/cakes';
  constructor(private http: HttpClient) { }

  getCakes() {
    return this.http.get(`${this.uri}`);
  }

  addCake(CakeFlavour, CakeTier) {
    const obj = {
      CakeFlavour,
      CakeTier
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('done'));
  }
}
