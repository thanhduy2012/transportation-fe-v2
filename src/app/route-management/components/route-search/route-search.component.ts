import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route } from '../../models/model';

@Component({
  selector: 'app-route-search',
  templateUrl: './route-search.component.html',
  styleUrls: ['./route-search.component.scss']
})
export class RouteSearchComponent implements OnInit {

  @Output() search = new EventEmitter<Route>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form =  this.fb.group(
      {
        firstLocation : [""],
        lastLocation: [""],
        length: [""],
        complexityId: [],
      }

    );

  }

  ngOnInit(): void {
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if(valid) {
      const RouteSearch: Route={
        firstLocation :value.firstLocation,
        lastLocation:value.lastLocation,
        length:value.length,
        complexity:{
          id: value.complexityId
        },

      }
      this.search.emit(RouteSearch);
    } 

  }

}
