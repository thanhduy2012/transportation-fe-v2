import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AddTripRequest, AddTripResponse, DeleteTripRequest, DeleteTripResponse, GetListTripPagingByTripRequest, GetListTripPagingByTripResponse, UpdateTripRequest, UpdateTripResponse } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(private http: HttpClient){}


  /**
   * @author Thành Duy
   */
  getListTripPaging(request: GetListTripPagingByTripRequest): Observable<GetListTripPagingByTripResponse>{

    return this.http
      .post<GetListTripPagingByTripResponse>("/api/trip/get-all", request)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

/**
 * 
 * @param 
 * @author Thành Duy
 */
  addTrip(request: AddTripRequest):Observable<AddTripResponse>{
    return this.http
    .post<AddTripResponse>("/api/trip/create", request)
    .pipe(catchError((httpError: any) => {
      return throwError(httpError);
    }))
  }



  /**
 * 
 * @param 
 * @author Thành Duy
 */
updateTrip(request: UpdateTripRequest):Observable<UpdateTripResponse>{
  return this.http
  .post<UpdateTripResponse>("/api/trip/update", request)
  .pipe(catchError((httpError: any) => {
    return throwError(httpError);
  }))
}


  /**
 * 
 * @param 
 * @author Thành Duy
 */
deleteTrip(request: DeleteTripRequest):Observable<DeleteTripResponse>{
  return this.http
  .post<DeleteTripResponse>("/api/trip/delete", request)
  .pipe(catchError((httpError: any) => {
    return throwError(httpError);
  }))
}



}