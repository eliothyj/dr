import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpUrlEncodingCodec,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  doLogin(form: any): Observable<any> {
    const url = 'http://localhost:12345/Login/Login';
    let params = new HttpParams({
      encoder: new HttpUrlEncodingCodec(),
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    params = params.set('hosp_mk', form.hosp_mk || '');
    params = params.set('loginId', form.uid || '');
    params = params.set('password', form.pwd || '');

    return this.http.post(url, params, { headers });
  }
}
