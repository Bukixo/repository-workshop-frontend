import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CakeService } from '../cake.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cake-edit',
  templateUrl: './cake-edit.component.html',
  styleUrls: ['./cake-edit.component.css']
})
export class CakeEditComponent implements OnInit {
  angForm: FormGroup;
  cake: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private cakeService: CakeService, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
     this.angForm = this.fb.group({
       CakeFlavour: ['', Validators.required],
       CakeTier: ['', Validators.required],
       CakeImage: ['', Validators.required]
     })
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cakeService.editCake(params[`id`]).subscribe(res => {
        this.cake = res;
      })
    })
  }

  updateCake(CakeFlavour, CakeImage, CakeTier) {
    this.route.params.subscribe(params => {
      this.cakeService.updateCake(CakeFlavour, CakeImage, CakeTier, params.id);
      this.router.navigate(['cakes']);
    });
  }
}
