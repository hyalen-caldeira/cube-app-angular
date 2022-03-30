import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthTip } from '../models/health-tip';

@Injectable({
  providedIn: 'root'
})
export class HealthTipsService {
  readonly baseUrl = 'http://localhost:8080/api/health-tips';

  constructor(private http: HttpClient) { }

  getHealthTips(): Observable<HealthTip[]> {
    return this.http.get<HealthTip[]>(this.baseUrl);
  }

  getHealthTipsById(id: any): Observable<HealthTip[]> {
    return this.http.get<HealthTip[]>(`${this.baseUrl}/${id}`);
  }
}
