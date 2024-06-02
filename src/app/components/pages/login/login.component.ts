import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericResult } from 'src/app/models/generic-result.model';
import { SecurityUtilsService } from 'src/app/services/security/security-utils.service';
import { LoginService } from 'src/app/services/signup/login.service';
import { MessageService } from 'src/app/services/util/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public form!: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private securityService: SecurityUtilsService,
    private messageService: MessageService,
  ) {
    this.validForm();
  }

  validForm() {
    this.form = this.fb.group({
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
    });
  }

  login() {
    this.loginService.login(this.form.value).subscribe({
      next: (result: GenericResult) => {
        if (result.success) {
          this.securityService.grantedAuthorization(result.data);
          this.router.navigate(['home']);
        } else {
          this.messageService.alert('Não foi possível fazer o login.', 'warning', 'bottom-center', 5000, 'notification-group-1');
        }
      },
      error: (err) => {
        this.messageService.alert('Erro desconhecido.', 'danger', 'bottom-center', 5000, 'notification-group-1');
      },
    });
  }
}
