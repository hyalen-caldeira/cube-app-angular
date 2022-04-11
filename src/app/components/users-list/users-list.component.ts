import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

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
  errorAPI= false;

  // TODO - Remove HealthTipsService
  constructor(private userService: UserService) { }

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
      .subscribe(
       (data) => {
          this.users = data;
          this.errorAPI = false;
          // this.users?.push(data) // = data;
          // console.log(data);
        },
        (error) =>{
          this.errorAPI = true;
          console.log('Error state from API')
      }
      )
  }

  reloadCurrentPage() {
    window.location.reload();
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

  updateList(user : User) : void {
    console.log("Im here ...")
    // let updatedItem = this.users?.find(this.findIndexToUpdate, user.id);
    // let index = this.users?.indexOf(updatedItem);


    // this.users?[index] = user;
  }

  // findIndexToUpdate(newItem) { 
  //   return newItem.id === this;
  // }
}
