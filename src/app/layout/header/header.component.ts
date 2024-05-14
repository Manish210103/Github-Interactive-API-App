import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  currentUserEmail = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    setInterval(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      if (this.isLoggedIn) {
        this.currentUserEmail = this.authService.getCurrentUserEmail();
        console.log('Logged:', this.isLoggedIn);
        console.log('Current user:', this.currentUserEmail);
      }
    }, 1000); 
  }
  
  logout() {
    this.authService.logout();
    this.isLoggedIn=false;
    console.log('Logged:', this.isLoggedIn);
  }
}