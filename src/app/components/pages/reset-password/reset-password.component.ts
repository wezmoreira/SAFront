import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router)
  {
    this.form = this.fb.group({
      email: [
        '', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(150),
          Validators.required
        ])
      ],
    })
  }

  reset(){
    
  }
}
