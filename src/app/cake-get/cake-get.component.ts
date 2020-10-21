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

  deleteCake(id, index) {
    this.cakeService.deleteCake(id).subscribe( res => {
      this.cakes.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.cakeService
    .getCakes()
    .subscribe((data: Cake[]) => {
      console.log(data);
      this.cakes = data;
    });
  }

}
