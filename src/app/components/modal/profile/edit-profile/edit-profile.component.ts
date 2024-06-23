import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  @Input() public user: UserModel = new UserModel();
  
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    console.log('EditProfileComponent');
    console.log('user', this.user);
    this.validForm();
  }

  validForm() {
    this.form = this.fb.group({
      username: [
        this.user.username,
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ],
      password: [
        this.user.password,
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(50),
        ]),
      ],
      email: [
        this.user.email,
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(150),
        ]),
      ],
      city: [
        this.user.city,
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(30),
        ]),
      ],
      state: [
        this.user.state,
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(2),
        ]),
      ],
      cep: [
        this.user.cep,
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(20),
        ]),
      ],
      address: [
        this.user.address,
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(150),
        ]),
      ],
      number: [
        this.user.number,
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(15),
        ]),
      ],
    });
  }

  onSubmit() {
    const formValues = this.form.value;
  
    const changes: { [key: string]: any } = {};
  
    Object.keys(formValues).forEach(key => {
      const userKey = key as keyof UserModel;
      if (formValues[userKey] !== this.user[userKey]) {
        changes[userKey] = formValues[userKey];
      }
    });
  
    const isDifferent = Object.keys(changes).length > 0;
  
    if (isDifferent) {
      this.userService.updateUser(changes).subscribe({
        next: response => {
          this.user = response.data;
          window.location.reload();
        }, 
        error: error => {
          console.error('Erro ao atualizar o usuário.', error);
        }
      });
    } else {
      console.log('Nenhuma alteração detectada.');
    }
  }

}
