import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddTripRequest, Trip, UpdateTripRequest } from '../../models/model';
import { addTrip, updateTrip } from '../../store/trip.action';
import { TripState } from '../../store/trip.reducer';

@Component({
  selector: 'app-trip-form-page',
  templateUrl: './trip-form-page.component.html',
  styleUrls: ['./trip-form-page.component.scss']
})
export class TripFormPageComponent implements OnInit {

  data?: any;
  title?: string;
  btn?: string
  constructor(
    private storeTrip: Store<TripState>,
    @Inject(MAT_DIALOG_DATA) private dataS: any,
    private dialogRef: MatDialogRef<TripFormPageComponent>
  ) { 
  this.data = dataS;
  }

  ngOnInit(): void {

  }

  addTrip($event:Trip){
    console.log("add Trip")
    const request: AddTripRequest ={
      trip: $event
    }
    this.storeTrip.dispatch(addTrip({request}));
    this.dialogRef.close();
  }

  updateTrip($event:Trip){
    console.log("update Trip")
    const request: UpdateTripRequest ={
      trip: $event
    }
    this.storeTrip.dispatch(updateTrip({request}));
    this.dialogRef.close();
  }
}
