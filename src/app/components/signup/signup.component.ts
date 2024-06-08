import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signup(regform: NgForm) {
    console.log(regform.value);
    this.authService.registedUser(regform.value.email, regform.value.password);
    // this.router.navigate(['/login']);
  }

  reset(regform: NgForm) {
    regform.reset();
  }
}
