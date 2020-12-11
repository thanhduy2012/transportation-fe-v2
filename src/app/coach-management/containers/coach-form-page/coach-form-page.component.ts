import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddCoachRequest, Coach, GetSalaryWithDateRequest, SalaryCoachDTO, UpdateCoachRequest } from '../../models/models';
import { addCoach, getSalary, updateCoach } from '../../store/coach.action';
import { CoachState } from '../../store/coach.reducer';
import { selectSalaryOfCoach } from '../../store/coach.selector';

@Component({
  selector: 'app-coach-form-page',
  templateUrl: './coach-form-page.component.html',
  styleUrls: ['./coach-form-page.component.scss']
})
export class CoachFormPageComponent implements OnInit {

  data?: any;
  title?: string;
  btn?: string
  salaryCoach$:Observable<SalaryCoachDTO>| any;
  constructor(
    private storeCoach: Store<CoachState>,
    @Inject(MAT_DIALOG_DATA) private dataS: any,
    private dialogRef: MatDialogRef<CoachFormPageComponent>
  ) { 
  this.data = dataS;
  this.salaryCoach$=this.storeCoach.pipe(select(selectSalaryOfCoach));
  }

  ngOnInit(): void {

  }

  addCoach($event:Coach){
    const request: AddCoachRequest ={
      coach: $event
    }
    this.storeCoach.dispatch(addCoach({request}));
    this.dialogRef.close();
  }

  updateCoach($event:Coach){
    console.log("update coach")
    const request: UpdateCoachRequest ={
      coach: $event
    }
    this.storeCoach.dispatch(updateCoach({request}));
    this.dialogRef.close();
  }

  searchSalary($event:any){
    console.log("event : ", $event);
    console.log("coach: ", this.data);

    const request: GetSalaryWithDateRequest ={
      fromDate:$event.fromDate,
      toDate:$event.toDate,
      coachId:this.data.coach.id
    }
    this.storeCoach.dispatch(getSalary({request}));
  }

}
