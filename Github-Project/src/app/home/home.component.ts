import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!:User;
  constructor(private userService:UserService) {

   }

  ngOnInit(): void {
    this.userService.userRequest()
    this.user = this.userService.user
    }
}
