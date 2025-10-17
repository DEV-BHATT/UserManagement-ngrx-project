import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import { UserFormComponent } from '../../users/user-form/user-form';
import { UserListComponent } from '../../users/user-list/user-list';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,UserListComponent],
  templateUrl:'./dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('isLogged');
    this.router.navigate(['/login']);
  }
}


