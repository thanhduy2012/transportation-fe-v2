import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trip } from '../../models/model';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit {

  @Output() addTrip = new EventEmitter<Trip>();
  @Output() updateTrip = new EventEmitter<Trip>();
  @Input() data?: any;

  form: FormGroup;
  title ?: string;
  btn ?: string;

  constructor( private fb: FormBuilder) { 

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


    if(this.data.type =="update"){
      this.form.patchValue(this.data.Trip)
      this.title = "Update Trip";
      this.btn = "Save"
    }
    if(this.data.type=="create"){
      this.title = "Create Trip"
      this.btn = "Create"
    }


  }

  save(form: FormGroup) {

    const { valid, value } = form;
    if(valid) {
      const trip: Trip={
        id:value.id,
        code: value.code,
        numberGuest: value.numberGuest,
        price: value.price,
        status: value.status
      }

      
    if(this.data.type =="update"){
      console.log("update")
      this.updateTrip.emit(trip);
    }
    if(this.data.type =="create"){
      console.log("edit")
      this.addTrip.emit(trip);
    }
    } 

  }


}
