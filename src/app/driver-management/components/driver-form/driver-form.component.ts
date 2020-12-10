import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Driver } from '../../models/model';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent implements OnInit {


  @Output() addDriver = new EventEmitter<Driver>();
  @Output() updateDriver = new EventEmitter<Driver>();
  @Input() data?: any;

  form: FormGroup;
  title ?: string;
  btn ?: string;

  constructor( private fb: FormBuilder) { 

    this.form =  this.fb.group(
      {
        id:[""],
        name: [""],
        identityCard: [""],
        licenseDriver: [""],
        typeLicenseDriver: [""],
        address: [""],
        dateOfBirth:[""],
        seniority:[],
      }

    );

  }

  ngOnInit(): void {


    if(this.data.type =="update"){
      this.form.patchValue(this.data.driver)
      this.title = "Update Driver";
      this.btn = "Save"
    }
    if(this.data.type=="create"){
      this.title = "Create Driver"
      this.btn = "Create"
    }


  }

  save(form: FormGroup) {

    const { valid, value } = form;
    if(valid) {
      const Driver: Driver={
        id:value.id,
        name: value.name,
        identityCard: value.identityCard,
        licenseDriver: value.licenseDriver,
        typeLicenseDriver: value.typeLicenseDriver,
        dateOfBirth: value.dateOfBirth,
        address: value.address,
        toDOB:value.toDOB,
        seniority: value.seniority

      }

      
    if(this.data.type =="update"){
      console.log("update")
      this.updateDriver.emit(Driver);
    }
    if(this.data.type =="create"){
      console.log("edit")
      this.addDriver.emit(Driver);
    }
    } 

  }

}
