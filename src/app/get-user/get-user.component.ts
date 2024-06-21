import { Component, OnInit, ViewChild } from '@angular/core';
import { SavingsServiceService } from '../savings-service.service';
import { User } from '../models/User.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  users:any[]=[];
  @ViewChild("userId") userId!:any;
  loading:boolean=false;
 
  constructor(private savingsServiceService:SavingsServiceService){}
  ngOnInit(){
  this.loading=true;
    this.savingsServiceService.getUsers().subscribe({
      next:(data)=>{
        this.loading = true;  
        this.users = data;
        this.loading = false;
      },
      error:(err)=>{

      }
    })
   
  }
  deleteUser(){
    this.savingsServiceService.deleteUser(this.userId.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.users = this.users.filter(user => user.userId !== this.userId.value);
        console.log("users",this.users);

      },
      error:(err:any)=>{

      }
       
    })
  }
  

}
