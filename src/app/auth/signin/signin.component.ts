import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  /** create a new auth form  */
  authForm = new FormGroup({

    /** list out the diff. fields for signin form */
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  });
  constructor() { }

  ngOnInit(): void {
  }

}
