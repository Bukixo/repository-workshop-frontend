import { Component, OnInit } from '@angular/core';
import Cake from '../cake';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cake-get',
  templateUrl: './cake-get.component.html',
  styleUrls: ['./cake-get.component.css']
})
export class CakeGetComponent implements OnInit {

  cakes: Cake[];
  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {
    this.cakeService
    .getCakes()
    .subscribe((data: Cake[]) => {
      this.cakes = data;
    });
  }

}
