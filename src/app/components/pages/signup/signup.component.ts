import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupDataService } from 'src/app/services/signup/signup-data.service';
import { MessageService } from 'src/app/services/util/message.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public form!: FormGroup;

  constructor(
    private service: SignupDataService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
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

  register() {
    this.service.registerUser(this.form.value).subscribe({
      next: (data: any) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.messageService.alert('Erro ao cadastrar usuário.', 'danger', 'bottom-center', 5000, 'notification-group-1');
      },
    });
  }
}
