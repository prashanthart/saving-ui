import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/User.model';
import { Bank } from '../models/Bank.model';
import { HttpBackend } from '@angular/common/http';
import { SavingsServiceService } from '../savings-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  @ViewChild("userForm") userForms!: NgForm;
  radioBtnOptions:string[]=['Yes','No'];
  bankCountOptions:number[]=[1,2,3];
  selectedOption="";
  bankCount:number=0;
  bankCountArray:number[]=[];
  userObject:User={
    userId: '',
    name: '',
    bank:[]
  }
  constructor(private savingsServiceService:SavingsServiceService){}
  

  getBankCountArray():any{
    // console.log(this.userForms);
    return new Array(+this.bankCount);
    }

  

  onSubmit(){
   console.log(this.userForms);
   this.userObject.userId = this.userForms.value.userId;
   this.userObject.name = this.userForms.value.name;
   if(this.selectedOption==='Yes'){
    let bnkCount:number = +this.bankCount;
    for(let i=0;i<bnkCount;i++){
      let bank:any;
      let userId = this.userForms.value.userId;
      let name = this.userForms.value['bankName_'+i];
      let amount =  this.userForms.value['amount_'+i];
      bank = {userId,name,amount};
      this.userObject.bank.push(bank);
    }
   }
   else{
    this.userObject.bank = [];
   }
  this.userForms.reset();
  this.savingsServiceService.createUser(this.userObject).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err)=>{
      console.log(err);
    }
  });
}

}
