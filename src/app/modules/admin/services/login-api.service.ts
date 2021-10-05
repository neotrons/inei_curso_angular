import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login, loginRespose} from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  auth(login: Login): Observable<loginRespose> {
    return this.http.post<loginRespose>(`${this.apiUrl}/auth/login/`, login)
    .pipe(
      catchError(err => {
        return throwError(err);
      })
    )
  }
}
