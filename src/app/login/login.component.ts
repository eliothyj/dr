import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: login = {};

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form);
  }
}

interface login {
  hosp_mk?: string;
  uid?: string;
  pwd?: string;
}
