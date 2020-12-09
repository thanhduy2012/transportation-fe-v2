import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coach } from '../../models/models';

@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.scss']
})
export class CoachFormComponent implements OnInit {


  @Output() addCoach = new EventEmitter<Coach>();
  @Output() updateCoach = new EventEmitter<Coach>();
  @Input() data?: any;

  form: FormGroup;
  title ?: string;
  btn ?: string;

  constructor( private fb: FormBuilder) { 

    this.form =  this.fb.group(
      {
        id:[""],
        licensePlate: [""],
        manufacturer: [""],
        color:[""],
        model: [""],
        seatNumber: [],
        status: [""],
        lastDateMaintenance:[""]
      }

    );

  }

  ngOnInit(): void {


    if(this.data.type =="update"){
      this.form.patchValue(this.data.coach)
      this.title = "Update Coach";
      this.btn = "Save"
    }
    if(this.data.type=="create"){
      this.title = "Create Coach"
      this.btn = "Create"
    }


  }

  save(form: FormGroup) {

    const { valid, value } = form;
    if(valid) {
      const coach: Coach={
        id:value.id,
        licensePlate: value.licensePlate,
        manufacturer: value.manufacturer,
        model: value.model,
        seatNumber: value.seatNumber,
        color: value.color,
        lastDateMaintenance: value.lastDateMaintenance,

      }

      
    if(this.data.type =="update"){
      console.log("update")
      this.updateCoach.emit(coach);
    }
    if(this.data.type =="create"){
      console.log("edit")
      this.addCoach.emit(coach);
    }
    } 

  }

}
