import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CakeService } from '../cake.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cake-add',
  templateUrl: './cake-add.component.html',
  styleUrls: ['./cake-add.component.css']
})
export class CakeAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private cakeService: CakeService, private router: Router) { 
    this.createForm();
  }

  public createForm() {
    this.angForm = this.fb.group({
      CakeFlavour: ['', Validators.required],
      CakeTier: ['', Validators.required]
    });
  }

  addCake(CakeFlavour, CakeTier) {
    this.cakeService.addCake(CakeFlavour, CakeTier);
    this.router.navigate(['cakes']);
  }

  ngOnInit(): void {
  }

}
