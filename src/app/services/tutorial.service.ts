import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  get(id: any): Observable<User> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/vnd.spring-template.user.v1+json')
      .set('accept', 'application/vnd.spring-template.user.v1+json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.post(baseUrl, data, {headers})
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(name: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/vnd.spring-template.user.v1+json')
      .set('accept', 'application/vnd.spring-template.user.v1+json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.delete(`${baseUrl}/${name}`, {headers});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${name}`);
  }
}
