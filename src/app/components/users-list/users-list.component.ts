import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  name = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
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

    this.tutorialService.findByName(this.name)
      .subscribe({
        next: (data) => {
          // this.users = data;
          this.users?.push(data) // = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
