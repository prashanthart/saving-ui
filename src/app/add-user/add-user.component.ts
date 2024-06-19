import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/User.model';
import { Bank } from '../models/Bank.model';
import { HttpBackend } from '@angular/common/http';

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
  constructor(){}
  

  getBankCountArray():any{
    
    return new Array(+this.bankCount);
    }

  

  onSubmit(){
   console.log(this.userForms);
   this.userObject.userId = this.userForms.value.userId;
   this.userObject.name = this.userForms.value.name;
  //  if(this.userForms.value.bankOption=="Yes"){
  //   this.userObject.bank=[{this}]
  //  }
  this.userForms.reset();
}

}
