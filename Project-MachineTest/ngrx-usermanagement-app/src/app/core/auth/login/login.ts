import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatError, MatInputModule, MatLabel } from '@angular/material/input';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,MatError,MatLabel,MatInputModule,MatCardModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    const { username, password } = this.form.value;

    // ✅ Check hardcoded credentials
    if (username === 'user@gmail.com' && password === 'user@123') {
      const token = this.generateJWT(username);
      localStorage.setItem('token', token);
      localStorage.setItem('isLogged', '1');

      // Navigate to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
      this.form.markAllAsTouched();
    }
  }

  // Dummy JWT generator (base64 encoded)
  private generateJWT(username: string): string {
    const header = { alg: 'HS256', typ: 'JWT' };
    const payload = {
      sub: username,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 // 1 hour expiry
    };

    const encode = (obj: any) =>
      btoa(JSON.stringify(obj)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

    return `${encode(header)}.${encode(payload)}.dummy-signature`;
  }
}
