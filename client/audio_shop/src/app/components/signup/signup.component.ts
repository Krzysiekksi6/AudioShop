import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public credentials = {
    name: '',
    email: '',
    password: '',
  };
  public signupError = false;

  constructor(private authService: AuthService, public router: Router) {}
  ngOnInit(): void {}
  create() {
    this.signupError = false; 
    this.authService.createOrUpdate(this.credentials).subscribe(
      (result) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.signupError = true;
        console.log(error);
      }
    );
  }
}
