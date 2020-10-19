import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cake-add',
  templateUrl: './cake-add.component.html',
  styleUrls: ['./cake-add.component.css']
})
export class CakeAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  public createForm() {
    this.angForm = this.fb.group({
      CakeFlavour: ['', Validators.required],
      CakeTier: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
