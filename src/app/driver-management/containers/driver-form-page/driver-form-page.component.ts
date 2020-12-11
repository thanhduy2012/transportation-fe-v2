import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddDriverRequest, Driver, GetSalaryDriverRequest, SalaryDriverDTO, UpdateDriverRequest } from '../../models/model';
import { addDriver, clearSalary, getSalary, updateDriver } from '../../store/driver.action';
import { DriverState } from '../../store/driver.reducer';
import { selectSalaryDriver } from '../../store/driver.selector';

@Component({
  selector: 'app-driver-form-page',
  templateUrl: './driver-form-page.component.html',
  styleUrls: ['./driver-form-page.component.scss']
})
export class DriverFormPageComponent implements OnInit {

  data?: any;
  title?: string;
  btn?: string
  salaryDriver$: Observable<SalaryDriverDTO> |any;
  constructor(
    private storeDriver: Store<DriverState>,
    @Inject(MAT_DIALOG_DATA) private dataS: any,
    private dialogRef: MatDialogRef<DriverFormPageComponent>
  ) { 
  this.data = dataS;

  this.salaryDriver$ = this.storeDriver.pipe(select(selectSalaryDriver));
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


  getSalary($event: any){
    


    if(typeof $event == 'string'){
          const request: GetSalaryDriverRequest ={
          driverId:  this.data.driver.id,
          month:$event
    
      }

      this.storeDriver.dispatch(getSalary({request}));
    }

  }


}
