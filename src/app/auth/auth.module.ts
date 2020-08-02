import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { ReactiveFormsModule} from '@angular/forms';
import { InputComponent } from '../shared/input/input.component';
import { SignoutComponent } from './signout/signout.component';
@NgModule({
  declarations: [SigninComponent, SignupComponent, InputComponent, SignoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
