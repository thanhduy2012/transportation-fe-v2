
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coach } from 'src/app/coach-management/models/models';
import { Driver } from 'src/app/driver-management/models/model';
import { Route } from 'src/app/route-management/models/model';
import { Trip } from '../../models/model';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent implements OnInit ,OnChanges{

  @Output() addTrip = new EventEmitter<Trip>();
  @Output() updateTrip = new EventEmitter<Trip>();
  @Input() data?: any;
  @Input() listCoach?: Coach[] | any;
  @Input() listDriver?: Driver[] | any;
  @Input() listRoute?: Route[] | any;

  listSupDriver?: Driver[] | any;
  listMainDriver?: Driver[] | any;

  maxGuest?: number;

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
        status: [""],
        supDriver:[""],
        mainDriver:[""],
        coach:[""],
        route:[""],
        salary:[""],
        date:[""]
      }

    );

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.listSupDriver = this.listDriver;
    this.listMainDriver = this.listDriver;
  }

  ngOnInit(): void {


    if(this.data.type =="update"){
      this.form.patchValue(this.data.Trip);
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
        status: value.status,
        salary:value.salary,
        date: value.date,
        supDriver:{
          id: value.supDriver
        },
        mainDriver:{
          id: value.mainDriver
        },
        coach:{
          id: value.coach
        },
        route:{
          id: value.route
        },

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

  changeMainDriver($event : any){
      console.log("event : ", $event.target.value)
      this.listSupDriver = this.listDriver.filter((i:any) => i.id != $event.target.value);
  }

  changeSupDriver($event  : any){
    this.listMainDriver = this.listDriver.filter((i:any) => i.id != $event.target.value);
  }

  chooseCoach($event:any){
    console.log(" === ", this.listCoach.filter((item:any) => item.id == $event.target.value)[0])
    this.maxGuest = this.listCoach.filter((item:any) => item.id == $event.target.value)[0].seatNumber-2;
  }

}
