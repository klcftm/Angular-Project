import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Category } from '../Category/category';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';


@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>{
   return this.http.get<Category[]>("http://localhost:3000/categories").pipe(
     tap(data=> console.log(JSON.stringify(data))),
     catchError(this.handleError)
   );

  }
  handleError(err: HttpErrorResponse) {
    let errorMessage=""
    if(err.error instanceof ErrorEvent){
      errorMessage='Bir hata oluştu' + err.error.message
    }else{
      errorMessage='Sistemsel bir hata oluştu'
    }

    return throwError(errorMessage)
  }
}
