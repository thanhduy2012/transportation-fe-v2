import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AddRouteRequest, AddRouteResponse, DeleteRouteRequest, DeleteRouteResponse, GetListRoutePagingByRouteRequest, GetListRoutePagingByRouteResponse, UpdateRouteRequest, UpdateRouteResponse } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(private http: HttpClient){}


  /**
   * @author Thành Duy
   */
  getListRoutePaging(request: GetListRoutePagingByRouteRequest): Observable<GetListRoutePagingByRouteResponse>{

    return this.http
      .post<GetListRoutePagingByRouteResponse>("/api/route/get-all", request)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

/**
 * 
 * @param 
 * @author Thành Duy
 */
  addRoute(request: AddRouteRequest):Observable<AddRouteResponse>{
    return this.http
    .post<AddRouteResponse>("/api/route/create", request)
    .pipe(catchError((httpError: any) => {
      return throwError(httpError);
    }))
  }



  /**
 * 
 * @param 
 * @author Thành Duy
 */
updateRoute(request: UpdateRouteRequest):Observable<UpdateRouteResponse>{
  return this.http
  .post<UpdateRouteResponse>("/api/route/update", request)
  .pipe(catchError((httpError: any) => {
    return throwError(httpError);
  }))
}


  /**
 * 
 * @param 
 * @author Thành Duy
 */
deleteRoute(request: DeleteRouteRequest):Observable<DeleteRouteResponse>{
  return this.http
  .post<DeleteRouteResponse>("/api/route/delete", request)
  .pipe(catchError((httpError: any) => {
    return throwError(httpError);
  }))
}



}