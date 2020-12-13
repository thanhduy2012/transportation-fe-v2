import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coach, DeleteCoachRequest, GetListCoachPagingByCoachRequest } from '../../models/models';
import { clearSalaryCoach, deleteCoach, getListCoachPaging } from '../../store/coach.action';
import { CoachState } from '../../store/coach.reducer';
import { selectListCoach, selectPageOfListCoach } from '../../store/coach.selector';
import { CoachFormPageComponent } from '../coach-form-page/coach-form-page.component';

@Component({
  selector: 'app-coach-page',
  templateUrl: './coach-page.component.html',
  styleUrls: ['./coach-page.component.scss']
})
export class CoachPageComponent implements OnInit {

  pageOfListCoach$: Observable<any> | undefined;
  listCoach$: Observable<Coach[]> |any;

  coachSearch:Coach ={};
  PAGE_SIZE:number = 10;
  currentPage:number = 1;

  constructor(
    private storeCoach: Store<CoachState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pipeGeneral();
    this.pageOfListCoach$ = this.storeCoach.pipe(select(selectPageOfListCoach));
    this.listCoach$ = this.storeCoach.pipe(select(selectListCoach));

  }

    /**
   * Get list Coach
   * @author ThanhDuy
   */
  getListCoach(){
    const request: GetListCoachPagingByCoachRequest ={
        coach: this.coachSearch,
        pageNumber:this.currentPage,
        pageSize:this.PAGE_SIZE
      
    }

    this.storeCoach.dispatch(getListCoachPaging({request}));
  }

  pipeGeneral(){
    this.getListCoach();
  }

  goToPage($event:any){
    this.currentPage = $event;
    this.getListCoach();
  }

  searchCoach($event:Coach){
    this.coachSearch = $event;
    this.getListCoach();
  }

  openDialog($event:any){
    this.storeCoach.dispatch(clearSalaryCoach({}));
    const open = this.dialog.open(CoachFormPageComponent, {
      width: '65%',
      data: $event
    });
  }

  deleteCoach($event: any){

    const request: DeleteCoachRequest ={
        id: $event
      
    }

    this.storeCoach.dispatch(deleteCoach({request}));

  }

}
