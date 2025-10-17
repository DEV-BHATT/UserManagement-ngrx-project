import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllUsers } from '../../state/user.selectors';
import { deleteUser, loadUsers } from '../../state/user.action';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { UserFormComponent } from '../user-form/user-form';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatCardModule,UserFormComponent,MatPaginatorModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent implements OnInit {
  users$!: Observable<any[]>;
  showForm = false;
  editingUser: any = null;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['username', 'email', 'jobRole', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(UserFormComponent) userForm!: UserFormComponent;

  constructor(private store: Store) {}

  ngOnInit() {
    this.users$ = this.store.select(selectAllUsers);
    this.users$.subscribe(users => (this.dataSource.data = users ?? []));
    this.store.dispatch(loadUsers());
  }

  delete(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }

  edit(user: any) {
  this.showForm = true;
  setTimeout(() => {
    if (this.userForm) {
      this.userForm.editUser(user);
    }
  });
}   
 addUser() {
    this.editingUser = null;
    this.showForm = true;
  }
   onFormClosed() {
    this.editingUser = null;
    this.showForm = false; 
  }
}
