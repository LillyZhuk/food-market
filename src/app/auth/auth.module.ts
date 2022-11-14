import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputModule } from '../shared/components/input/input.module';
import { ButtonModule } from '../shared/components/button/button.module';

import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    RouterModule
  ]
})
export class AuthModule { }
