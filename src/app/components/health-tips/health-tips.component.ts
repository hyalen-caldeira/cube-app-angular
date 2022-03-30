import { Component, Input, OnInit } from '@angular/core';
import { HealthTipsService } from 'src/app/services/health-tips.service';
import { HealthTip } from 'src/app/models/health-tip';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-health-tips',
  templateUrl: './health-tips.component.html',
  styleUrls: ['./health-tips.component.css']
})
export class HealthTipsComponent implements OnInit {
  healthTips?: HealthTip[];
  @Input() viewMode = false;

  @Input() currentUser: User = {
    id: '',
    name: '',
    address: '',
    email: ''
  };

  constructor(private healthTipsService : HealthTipsService) { }

  ngOnInit(): void {
    // if (!this.viewMode)
      this.getHealthTips();
    // this.getHealthTipsById(this.currentUser.id);
  }

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

  getHealthTipsById(id : any) : void {
    this.healthTipsService.getHealthTipsById(id)
      .subscribe({
        next: (data) => {
          this.healthTips = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
