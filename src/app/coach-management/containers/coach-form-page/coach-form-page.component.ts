import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddCoachRequest, Coach, UpdateCoachRequest } from '../../models/models';
import { addCoach, updateCoach } from '../../store/coach.action';
import { CoachState } from '../../store/coach.reducer';

@Component({
  selector: 'app-coach-form-page',
  templateUrl: './coach-form-page.component.html',
  styleUrls: ['./coach-form-page.component.scss']
})
export class CoachFormPageComponent implements OnInit {

  data?: any;
  title?: string;
  btn?: string
  constructor(
    private storeCoach: Store<CoachState>,
    @Inject(MAT_DIALOG_DATA) private dataS: any,
    private dialogRef: MatDialogRef<CoachFormPageComponent>
  ) { 
  this.data = dataS;
  }

  ngOnInit(): void {

  }

  addCoach($event:Coach){
    console.log("add coach")
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

}
