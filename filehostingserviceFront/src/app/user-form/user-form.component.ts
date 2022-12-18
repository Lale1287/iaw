import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserControllerService, NewUser} from '../openapi';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model:NewUser={
    username:'',
    password:''
  };
  idx = -1;
  constructor(private router: Router, private service: UserControllerService, private route: ActivatedRoute) { }

  onSubmit(): void {
    this.submitted = true;
    if (this.idx == -1) {
      this.service.userControllerCreate(this.model).subscribe();
    } /*else{
      if (this.model.id){
        this.service.userControllerUpdateById(this.model.id,this.model).subscribe()
      }
    }*/
  }

  ngOnInit() {
    const idxParam = this.route.snapshot.paramMap.get('idx');
    idxParam? this.idx = +idxParam : this.idx = -1;
    if (this.idx == -1) {
      this.model={
        username:'',
        password:''
      };
    } else {
        this.service.userControllerFind().subscribe((lista:NewUser[]) => {
          this.model = lista[+this.idx]
        })
    }
  }

  submitted = false;

  newUser() {
    this.model = {
      username:'',
      password:''
    };
  }

}
