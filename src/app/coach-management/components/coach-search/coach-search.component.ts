import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coach } from '../../models/models';

@Component({
  selector: 'app-coach-search',
  templateUrl: './coach-search.component.html',
  styleUrls: ['./coach-search.component.scss']
})
export class CoachSearchComponent implements OnInit {


  @Output() search = new EventEmitter<Coach>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form =  this.fb.group(
      {
        licensePlate: [""],
        manufacturer: [""],
        model: [""],
        seatNumber: [""],
        status: [""],
        lastDateMaintenanceFrom:[""],
        lastDateMaintenanceTo:[""],
        color:[""],
      }

    );

  }

  ngOnInit(): void {
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if(valid) {
      const coachSearch: Coach={
        licensePlate: value.licensePlate,
        manufacturer: value.manufacturer,
        model: value.model,
        seatNumber: value.seatNumber,
        color: value.color,
        fromLastDateMaintenance: value.lastDateMaintenanceFrom,
        toLastDateMaintenance:value.lastDateMaintenanceTo

      }
      this.search.emit(coachSearch);
    } 

  }

}
