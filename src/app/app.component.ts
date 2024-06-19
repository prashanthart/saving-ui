import { Component, OnInit } from '@angular/core';
import { SavingsServiceService } from './savings-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'family-savings-app';
  constructor(private savingsService:SavingsServiceService){}

  ngOnInit(): void {
    this.savingsService.getUsers().subscribe({
      next:(data:any)=>{
        console.log(data);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
  
}
