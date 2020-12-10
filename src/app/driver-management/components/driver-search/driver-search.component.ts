import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Driver } from '../../models/model';

@Component({
  selector: 'app-driver-search',
  templateUrl: './driver-search.component.html',
  styleUrls: ['./driver-search.component.scss']
})
export class DriverSearchComponent implements OnInit {

  @Output() search = new EventEmitter<Driver>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form =  this.fb.group(
      {
        name: [""],
        identityCard: [""],
        licenseDriver: [""],
        typeLicenseDriver: [""],
        address: [""],
        fromDOB:[""],
        toDOB:[""],
        seniority:[""],
      }

    );

  }

  ngOnInit(): void {
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if(valid) {
      const DriverSearch: Driver={
        name: value.name,
        identityCard: value.identityCard,
        licenseDriver: value.licenseDriver,
        typeLicenseDriver: value.typeLicenseDriver,
        fromDOB: value.fromDOB,
        address: value.address,
        toDOB:value.toDOB,
        seniority: value.seniority

      }
      this.search.emit(DriverSearch);
    } 

  }
}
