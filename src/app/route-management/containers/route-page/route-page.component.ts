import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeleteRouteRequest, GetListRoutePagingByRouteRequest, Route } from '../../models/model';
import { getListRoutePaging, deleteRoute } from '../../store/route.action';
import { RouteState } from '../../store/route.reducer';
import { selectPageOfListRoute, selectListRoute } from '../../store/route.selector';
import { RouteFormPageComponent } from '../route-form-page/route-form-page.component';

@Component({
  selector: 'app-route-page',
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.scss']
})
export class RoutePageComponent implements OnInit {

  pageOfListRoute$: Observable<any> | undefined;
  listRoute$: Observable<Route[]> |any;

  RouteSearch:Route ={};
  PAGE_SIZE:number = 10;
  currentPage:number = 1;

  constructor(
    private storeRoute: Store<RouteState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pipeGeneral();
    this.pageOfListRoute$ = this.storeRoute.pipe(select(selectPageOfListRoute));
    this.listRoute$ = this.storeRoute.pipe(select(selectListRoute));

  }

    /**
   * Get list Route
   * @author ThanhDuy
   */
  getListRoute(){
    const request: GetListRoutePagingByRouteRequest ={
        route: this.RouteSearch,
        pageNumber:this.currentPage,
        pageSize:this.PAGE_SIZE
      
    }

    this.storeRoute.dispatch(getListRoutePaging({request}));
  }

  pipeGeneral(){
    this.getListRoute();
  }

  goToPage($event:any){
    this.currentPage = $event;
    this.getListRoute();
  }

  searchRoute($event:Route){
    this.RouteSearch = $event;
    this.getListRoute();
  }

  openDialog($event:any){
    const open = this.dialog.open(RouteFormPageComponent, {
      width: '65%',
      data: $event
    });
  }

  deleteRoute($event: any){

    const request: DeleteRouteRequest ={
        id: $event
      
    }

    this.storeRoute.dispatch(deleteRoute({request}));

  }

}
