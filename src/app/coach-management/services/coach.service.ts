import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AddCoachRequest, AddCoachResponse, DeleteCoachRequest, DeleteCoachResponse, GetListCoachPagingByCoachRequest, GetListCoachPagingByCoachResponse, GetSalaryWithDateRequest, GetSalaryWithDateResponse, UpdateCoachRequest, UpdateCoachResponse } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  constructor(private http: HttpClient) { }


  /**
   * @author Thành Duy
   */
  getListCoachPaging(request: GetListCoachPagingByCoachRequest): Observable<GetListCoachPagingByCoachResponse> {

    return this.http
      .post<GetListCoachPagingByCoachResponse>("/api/coach/get-all", request)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }));
  }

  /**
   * 
   * @param 
   * @author Thành Duy
   */
  addCoach(request: AddCoachRequest): Observable<AddCoachResponse> {
    return this.http
      .post<AddCoachResponse>("/api/coach/create", request)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }))
  }



  /**
 * 
 * @param 
 * @author Thành Duy
 */
  updateCoach(request: UpdateCoachRequest): Observable<UpdateCoachResponse> {
    return this.http
      .post<UpdateCoachResponse>("/api/coach/update", request)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }))
  }


  /**
 * 
 * @param 
 * @author Thành Duy
 */
  deleteCoach(request: DeleteCoachRequest): Observable<DeleteCoachResponse> {
    return this.http
      .post<DeleteCoachResponse>("/api/coach/delete", request)
      .pipe(catchError((httpError: any) => {
        return throwError(httpError);
      }))
  }

    /**
 * 
 * @param 
 * @author Thành Duy
 */
getSalary(request: GetSalaryWithDateRequest): Observable<GetSalaryWithDateResponse> {
  return this.http
    .post<GetSalaryWithDateResponse>("/api/coach/salary", request)
    .pipe(catchError((httpError: any) => {
      return throwError(httpError);
    }))
}




}