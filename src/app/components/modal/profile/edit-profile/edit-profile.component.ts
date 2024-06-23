import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.validForm();
  }

  validForm() {
    this.form = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required,
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.required,
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(150),
          Validators.required,
        ]),
      ],
      city: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.required,
        ]),
      ],
      state: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.required,
        ]),
      ],
      cep: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.required,
        ]),
      ],
      address: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(150),
          Validators.required,
        ]),
      ],
      number: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(15),
          Validators.required,
        ]),
      ],
    });
  }
}
