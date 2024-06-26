import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public user: UserModel = new UserModel();

  constructor(private userService: UserService) {
    this.userInformation();
  }

  userInformation() {
    this.userService.getUser().subscribe((result) => {
      this.user = result.data;
    });
  }
}
