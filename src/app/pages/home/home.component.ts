import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username!: string;
  user: any;
  errorMessage: string = '';


  constructor(private githubService: GithubService)  { }

  ngOnInit(): void {  }
  fetchUser() {
  this.githubService.getUserData(this.username).subscribe(
    (data: any) => {
      this.user = data;
      this.errorMessage='';
      console.log(this.user);
      console.log(this.errorMessage)
    },
    (error: any) => {
      this.errorMessage = error.message;
      
      console.log(this.user);
      console.log(this.errorMessage)
    }
    
  );
}
}