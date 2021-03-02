import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpUrlEncodingCodec,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: login = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const url = 'http://localhost:12345/Login/Login';
    let params = new HttpParams({
      encoder: new HttpUrlEncodingCodec(),
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    params = params.set('loginId', this.form.uid || '');
    params = params.set('password', this.form.pwd || '');
    this.http.post(url, params, { headers }).subscribe((r) => {
      console.log(r);
    });
  }
}

interface login {
  hosp_mk?: string;
  uid?: string;
  pwd?: string;
}
