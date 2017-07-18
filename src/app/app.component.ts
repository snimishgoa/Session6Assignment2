import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  firstName: string;
  lastName: string;

  ngOnInit(){
    this.firstName = 'Demo';
    this.lastName = 'User';
    this.title = `${this.firstName} ${this.lastName}`;
  }

  assignTitle(fName:string, lName:string):void {
    this.title = `${fName} ${lName}`;
  }
}
