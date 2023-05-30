import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public credentials = {
    login: '',
    password: '',
  };

  public logged?: boolean;
  public logout?: boolean;
  public loginError = false;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {}
  signIn() {
    this.loginError = false; 
    return this.authService
      .authenticate(this.credentials)
      .subscribe((result) => {
        if (!result) {
          this.logged = false;
        } else {
          this.logout = false;
          this.credentials = {
            login: '',
            password: '',
          };
          this.router.navigate(['/shop']);
        }
      },
      (error) => {
        this.loginError = true; 
        this.logged = false;
        console.log(error);
      });
  }
}
