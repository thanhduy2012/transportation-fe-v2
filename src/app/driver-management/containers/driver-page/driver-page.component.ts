import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeleteDriverRequest, Driver, GetListDriverPagingByDriverRequest } from '../../models/model';
import { deleteDriver, getListDriverPaging } from '../../store/driver.action';
import { DriverState } from '../../store/driver.reducer';
import { selectListDriver, selectPageOfListDriver } from '../../store/driver.selector';
import { DriverFormPageComponent } from '../driver-form-page/driver-form-page.component';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrls: ['./driver-page.component.scss']
})
export class DriverPageComponent implements OnInit {

  pageOfListDriver$: Observable<any> | undefined;
  listDriver$: Observable<Driver[]> |any;

  DriverSearch:Driver ={};
  PAGE_SIZE:number = 10;
  currentPage:number = 1;

  constructor(
    private storeDriver: Store<DriverState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pipeGeneral();
    this.pageOfListDriver$ = this.storeDriver.pipe(select(selectPageOfListDriver));
    this.listDriver$ = this.storeDriver.pipe(select(selectListDriver));

  }

    /**
   * Get list Driver
   * @author ThanhDuy
   */
  getListDriver(){
    const request: GetListDriverPagingByDriverRequest ={
        driver: this.DriverSearch,
        pageNumber:this.currentPage,
        pageSize:this.PAGE_SIZE
      
    }

    this.storeDriver.dispatch(getListDriverPaging({request}));
  }

  pipeGeneral(){
    this.getListDriver();
  }

  goToPage($event:any){
    this.currentPage = $event;
    this.getListDriver();
  }

  searchDriver($event:Driver){
    this.DriverSearch = $event;
    this.getListDriver();
  }

  openDialog($event:any){
    const open = this.dialog.open(DriverFormPageComponent, {
      width: '65%',
      data: $event
    });
  }

  deleteDriver($event: any){

    const request: DeleteDriverRequest ={
        id: $event
      
    }

    this.storeDriver.dispatch(deleteDriver({request}));

  }

}
