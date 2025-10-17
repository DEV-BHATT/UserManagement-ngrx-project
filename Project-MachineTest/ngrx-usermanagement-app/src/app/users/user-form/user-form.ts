  import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Store } from '@ngrx/store';
  import { addUser, updateUser } from '../../state/user.action';
  import { CommonModule } from '@angular/common';
  import { ReactiveFormsModule } from '@angular/forms';
  import { MatInputModule } from '@angular/material/input';
  import { MatSelectModule } from '@angular/material/select';
  import { MatButtonModule } from '@angular/material/button';
  import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

  @Component({
    selector: 'app-user-form',
    standalone: true,
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatCardModule,
      MatIcon
    ],
    templateUrl: './user-form.html',
    styleUrls: ['./user-form.scss']
  })
  export class UserFormComponent implements OnInit {
    userForm!: FormGroup;
    roles = ['tech', 'id', 'gd', 'qa'];
    editMode = false;
    editingUserId: number | null = null;
    @Input() userToEdit: any = null;
   @Output() formClosed = new EventEmitter<void>();

    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnInit() {
      this.userForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        jobRole: ['tech', Validators.required]
      });
    }

    save() {
      if (this.userForm.invalid) return;

      const user = {
        ...this.userForm.value,
        id: this.editingUserId,
        'job-role': this.userForm.value.jobRole
      };

      if (this.editMode) {
        this.store.dispatch(updateUser({ user }));
      } else {
        this.store.dispatch(addUser({ user }));
      }

      this.resetForm();
    }

    editUser(user: any) {
      console.log(user)
      this.editMode = true;
      this.editingUserId = user.id;

      this.userForm.patchValue({
        username: user.username,
        email: user.email,
        jobRole: user['job-role']
      });
    }

    resetForm() {
      this.userForm.reset({ jobRole: 'tech' });
      this.editMode = false;
      this.editingUserId = null;
      this.formClosed.emit(); 
    }
  }
