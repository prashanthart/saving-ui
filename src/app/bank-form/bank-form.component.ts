import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent {
  @Input() index:any;

}
