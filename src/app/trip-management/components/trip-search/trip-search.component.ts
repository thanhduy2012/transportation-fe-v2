import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trip } from '../../models/model';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.scss']
})
export class TripSearchComponent implements OnInit {

  @Output() search = new EventEmitter<Trip>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form =  this.fb.group(
      {
        id:[""],
        code: [""],
        numberGuest: [],
        price: [],
        status: []
      }

    );

  }

  ngOnInit(): void {
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if(valid) {
      const TripSearch: Trip={

        id:value.id,
        code: value.code,
        numberGuest: value.numberGuest,
        price: value.price,
        status: value.status
      }
      this.search.emit(TripSearch);
    } 

  }

}
