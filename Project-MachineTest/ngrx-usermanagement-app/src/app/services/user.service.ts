import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'  
})
export class UserService {
  api = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  addUser(user: any): Observable<any> { 
    return this.http.post<any>(this.api, user);
  }

  deleteUser(id: number): Observable<any> { 
    return this.http.delete<any>(`${this.api}/${id}`);
  }

   updateUser(user: any): Observable<any> { 
   return this.http.put<any>(`${this.api}/${user.id}`, user);
}
}

