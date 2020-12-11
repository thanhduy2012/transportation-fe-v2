import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AddDriverRequest, AddDriverResponse, DeleteDriverRequest, DeleteDriverResponse, GetListDriverPagingByDriverRequest, GetListDriverPagingByDriverResponse, GetSalaryDriverRequest, GetSalaryDriverResponse, UpdateDriverRequest, UpdateDriverResponse } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  constructor(private http: HttpClient){}


  /**
   * @author Thành Duy
   */
  getListDriverPaging(request: GetListDriverPagingByDriverRequest): Observable<GetListDriverPagingByDriverResponse>{

    return this.http
      .post<GetListDriverPagingByDriverResponse>("/api/driver/get-all", request)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

/**
 * 
 * @param 
 * @author Thành Duy
 */
  addDriver(request: AddDriverRequest):Observable<AddDriverResponse>{
    return this.http
    .post<AddDriverResponse>("/api/driver/create", request)
    .pipe(catchError((httpError: any) => {
      return throwError(httpError);
    }))
  }



  /**
 * 
 * @param 
 * @author Thành Duy
 */
updateDriver(request: UpdateDriverRequest):Observable<UpdateDriverResponse>{
  return this.http
  .post<UpdateDriverResponse>("/api/driver/update", request)
  .pipe(catchError((httpError: any) => {
    return throwError(httpError);
  }))
}


  /**
 * 
 * @param 
 * @author Thành Duy
 */
deleteDriver(request: DeleteDriverRequest):Observable<DeleteDriverResponse>{
  return this.http
  .post<DeleteDriverResponse>("/api/driver/delete", request)
  .pipe(catchError((httpError: any) => {
    return throwError(httpError);
  }))
}


  /**
 * 
 * @param 
 * @author Thành Duy
 */
getSalary(request: GetSalaryDriverRequest):Observable<GetSalaryDriverResponse>{
  return this.http
  .post<GetSalaryDriverResponse>("/api/driver/salary", request)
  .pipe(catchError((httpError: any) => {
    return throwError(httpError);
  }))
}



}