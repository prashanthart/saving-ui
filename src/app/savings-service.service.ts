import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User.model';

@Injectable({
  providedIn: 'root'
})
export class SavingsServiceService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>("https://savings-ij30.onrender.com/api/getUsers");
  }

  createUser(user:User):Observable<any>{
    return this.http.post<any>("https://savings-ij30.onrender.com/api/addUser",user);
  }

  deleteUser(userId:string):Observable<any>{
    let headers={
      'accept':"*/*"
    }
    return this.http.delete<any>("https://savings-ij30.onrender.com/api/deleteUser/"+userId,{headers});
  }

}
