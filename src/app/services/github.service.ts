import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiUrl:string =  "https://api.github.com/users"
  
  constructor(private http :HttpClient){}

  getUserData(username: string): Observable<[any, any[]]> {
    let user = this.http.get<any>(`${this.apiUrl}/${username}`);
    let repos = this.http.get<any[]>(`${this.apiUrl}/${username}/repos`);
    return forkJoin([user, repos]);
  }
  
  
}