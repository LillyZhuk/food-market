import { Component, OnInit } from '@angular/core';
import { ButtonSize } from '../../shared/components/button/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  ButtonSize = ButtonSize;

  constructor() { }

  ngOnInit(): void {
  }

}
