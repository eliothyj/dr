import { LoginService } from './../_service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: login = {};

  constructor(private login: LoginService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.login.doLogin(this.form).subscribe((r: any) => {
      if (r.success) {
        sessionStorage.setItem('token', r.data.token);
        sessionStorage.serItem('hosp_mk', this.form.hosp_mk);
        sessionStorage.setItem('loginId', r.data.loginId);
        sessionStorage.setItem('password', r.data.password);
      } else {
        alert('登入失敗!!!');
      }
    });
  }
}

interface login {
  hosp_mk?: string;
  uid?: string;
  pwd?: string;
}
