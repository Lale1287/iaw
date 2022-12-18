import { Component, OnInit } from '@angular/core';
import { UserControllerService, User } from '../openapi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  idx = -1;
  userX: User[] = [];

  constructor(private service: UserControllerService) {
    this.loadUser()
  }

  ngOnInit(): void {
  }

  /*onSubmit(): void {
    this.submitted = true;
    if (this.idx == -1) {
      this.service.userControllerFind(this.userX).subscribe();
    } else{
      if (this.model.id){
        this.service.fileControllerUpdateById(this.model.id,this.model).subscribe()
      }
    }
  }*/

  loadUser(){
    this.service.userControllerFind().subscribe((user) => {
      this.userX = user
  })}

}
