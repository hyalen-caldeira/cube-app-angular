import { Component, OnInit } from '@angular/core';
import { HealthTip } from 'src/app/models/health-tip';
import { User } from 'src/app/models/user.model';
import { HealthTipsService } from 'src/app/services/health-tips.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  // TODO - Remove HealthTips
  healthTips?: HealthTip[];

  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  name = '';

  // TODO - Remove HealthTipsService
  constructor(private userService: UserService, private healthTipsService : HealthTipsService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.userService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentUser = {};
    this.currentIndex = -1;

    this.userService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.users = data;
          // this.users?.push(data) // = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refresh() : void {
    this.currentUser = {};
    this.currentIndex = -1;

    this.userService.findByName("")
      .subscribe({
        next: (data) => {
          this.users = data;
          // this.users?.push(data) // = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // TODO - Move the following method
  getHealthTips() : void {
    this.healthTipsService.getHealthTips()
      .subscribe({
        next: (data) => {
          this.healthTips = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
