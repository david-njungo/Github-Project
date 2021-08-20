import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repository } from '../repository';
import { User } from '../user';
import {UserService} from '../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!:User;
  repo!:Repository;
  constructor(private userService:UserService,private repoService:RepoService) {

   }

  ngOnInit(): void {
    this.userService.userRequest()
    this.user = this.userService.user
    this.repoService.repoRequest()
    this.repo = this.repoService.repo
    }
}
