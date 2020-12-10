import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddDriverRequest, Driver, UpdateDriverRequest } from '../../models/model';
import { addDriver, updateDriver } from '../../store/driver.action';
import { DriverState } from '../../store/driver.reducer';

@Component({
  selector: 'app-driver-form-page',
  templateUrl: './driver-form-page.component.html',
  styleUrls: ['./driver-form-page.component.scss']
})
export class DriverFormPageComponent implements OnInit {

  data?: any;
  title?: string;
  btn?: string
  constructor(
    private storeDriver: Store<DriverState>,
    @Inject(MAT_DIALOG_DATA) private dataS: any,
    private dialogRef: MatDialogRef<DriverFormPageComponent>
  ) { 
  this.data = dataS;
  }

  ngOnInit(): void {

  }

  addDriver($event:Driver){
    console.log("add Driver")
    const request: AddDriverRequest ={
      driver: $event
    }
    this.storeDriver.dispatch(addDriver({request}));
    this.dialogRef.close();
  }

  updateDriver($event:Driver){
    console.log("update Driver")
    const request: UpdateDriverRequest ={
      driver: $event
    }
    this.storeDriver.dispatch(updateDriver({request}));
    this.dialogRef.close();
  }


}
