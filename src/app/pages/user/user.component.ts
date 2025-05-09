import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../model/interface/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  personList: IUser[] = []; // Initialize as an empty array
  htttp = inject(HttpClient);
  constructor() { }

  ngOnInit(): void {
    this.getAllUsers ();
  }

  getAllUsers(): void {
     this.htttp.get('http://localhost:8080/persons').subscribe((response:any) => {
      this.personList = response; // Assign the response to personList
      console.log(this.personList[0]); // Log the response to the console for debugging
    })
  }
  getAllQuestions(): void {
    this.htttp.get('https://opentdb.com/api.php?amount=10&category=9&type=multiple').subscribe((response:any) => {

     //console.log(response); // Log the response to the console for debugging
   })
 }
  // Add any additional methods or properties as needed

}
