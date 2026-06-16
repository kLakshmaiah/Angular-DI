import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  firstUserID: number = Math.floor(Math.random() * DUMMY_USERS.length);
  firstUser = DUMMY_USERS[this.firstUserID];
  firstImage = "../assets/users/" + this.firstUser.avatar;
  @Input({ required: true }) Name!: string;
  @Input({ required: true }) ImageName!: string;
  @Input({ required: true }) UserId!: string;
  @Output() selectedUserId = new EventEmitter<string>();
  get ImageUrl() {
    return '../assets/users/' + this.ImageName;
  }

  SelectUser(id: string) {
    this.selectedUserId.emit(this.UserId);
  }
}
