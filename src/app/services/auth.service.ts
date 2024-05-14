import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: any;

  constructor(private fireauth : AngularFireAuth, private router : Router, private toastr: ToastrService) { 
    this.fireauth.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
      } else {
        localStorage.setItem('user', '');
      }
    });
  }

  isLoggedIn(): boolean {
    return this.currentUser != null
  }

  getCurrentUserEmail(): string {
    return this.currentUser ? this.currentUser.email : '';
  }

  async signIn(email : string, password : string) {
    try {
      const result = await this.fireauth.signInWithEmailAndPassword(email,password);
      this.router.navigate(['/home']);
      this.toastr.success("Signed In !!!",'Success');
    } catch (err:any) {
      this.toastr.error(err.message,'Error');
      this.router.navigate(['/signin']);
    }
  }

  async signUp(email : string, password : string) {
    try {
      const result = await this.fireauth.createUserWithEmailAndPassword(email, password);
      this.toastr.success("Created an Account. Sign in !!!",'Success');
      this.router.navigate(['/signin']);
    } catch (err:any) {
      this.toastr.error(err.message,'Error');
      this.router.navigate(['/signup']);
    }
  }
  

  async logout() {
    try {
      await this.fireauth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/signin']);
      this.toastr.success("Succesfully logged out !",'Success');
    } catch (err:any) {
      this.toastr.error(err.message,'Error');
    }
  }
}