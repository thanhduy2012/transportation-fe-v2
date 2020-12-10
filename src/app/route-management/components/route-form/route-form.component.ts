import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route } from '../../models/model';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss']
})
export class RouteFormComponent implements OnInit {

  @Output() addRoute = new EventEmitter<Route>();
  @Output() updateRoute = new EventEmitter<Route>();
  @Input() data?: any;

  form: FormGroup;
  title ?: string;
  btn ?: string;

  constructor( private fb: FormBuilder) { 

    this.form =  this.fb.group(
      {
        id:[""],
        firstLocation : [""],
        lastLocation: [""],
        length: [""],
        complexityId: [],
    
      }

    );

  }

  ngOnInit(): void {


    if(this.data.type =="update"){
      this.form.patchValue(this.data.route)
      this.title = "Update Route";
      this.btn = "Save"
    }
    if(this.data.type=="create"){
      this.title = "Create Route"
      this.btn = "Create"
    }


  }

  save(form: FormGroup) {

    const { valid, value } = form;
    if(valid) {
      const Route: Route={
        id:value.id,
        firstLocation :value.firstLocation,
        lastLocation:value.lastLocation,
        length:value.length,
        complexityId:value.complexityId,

      }

      
    if(this.data.type =="update"){
      console.log("update")
      this.updateRoute.emit(Route);
    }
    if(this.data.type =="create"){
      console.log("edit")
      this.addRoute.emit(Route);
    }
    } 

  }


}
