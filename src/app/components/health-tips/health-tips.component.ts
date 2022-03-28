import { Component, OnInit } from '@angular/core';
import { HealthTipsService } from 'src/app/services/health-tips.service';
import { HealthTip } from 'src/app/models/health-tip';

@Component({
  selector: 'app-health-tips',
  templateUrl: './health-tips.component.html',
  styleUrls: ['./health-tips.component.css']
})
export class HealthTipsComponent implements OnInit {
  healthTips?: HealthTip[];

  constructor(private healthTipsService : HealthTipsService) { }

  ngOnInit(): void {
    this.getHealthTips();
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

}
