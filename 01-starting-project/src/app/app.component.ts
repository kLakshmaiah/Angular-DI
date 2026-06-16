import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  Users = DUMMY_USERS;
  SlectedUserId!: number;
  SelectedUserName!: string;
  SelectedUserId(id: string) {
    this.SelectedUserName = this.Users.find((u) => u.id === id)!.name;
  }
}
