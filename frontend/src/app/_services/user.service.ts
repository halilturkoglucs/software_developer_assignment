import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(environment.CONTENT_API_URL + 'all', { responseType: 'text' });
  }

  getUserContent(): Observable<any> {
    return this.http.get(environment.CONTENT_API_URL + 'user', { responseType: 'text' });
  }

  getManagerContent(): Observable<any> {
    return this.http.get(environment.CONTENT_API_URL + 'manager', { responseType: 'text' });
  }

  getDirectorContent(): Observable<any> {
    return this.http.get(environment.CONTENT_API_URL + 'director', { responseType: 'text' });
  }
}
