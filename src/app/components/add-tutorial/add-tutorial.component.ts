import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  user: User = {
    id: '',
    name: '',
    address: '',
    email: ''
  };

  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      id: this.user.id,
      name: this.user.name,
      address: this.user.address,
      email: this.user.email
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    
    this.user = {
      name: '',
      address: '',
      email: ''
    };
  }
}
