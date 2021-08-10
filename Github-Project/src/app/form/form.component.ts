import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newUser = new User("", 8, "", 7, 8);
  @Output() adduser = new EventEmitter<User>();
  submitUser() {
    this.adduser.emit(this.newUser);
  }
  newRepo = new Repository("", "", "");
  @Output() addrepo = new EventEmitter<Repository>();
  submitRepo() {
    this.addrepo.emit(this.newRepo);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
