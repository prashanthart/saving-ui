import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavingsServiceService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>("https://savings-ij30.onrender.com/api/getUsers");
  }

}
