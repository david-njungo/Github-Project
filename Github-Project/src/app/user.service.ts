import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!:User;
  constructor(private http:HttpClient) { 
    this.user = new User("", 8,"",0,0)
  }
  userRequest(){
    interface ApiResponse{
      login:string;
      public_repos:number;
      avatar_url:any;
      followers:number;
      following:number
  }
  let promise = new Promise<void>((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.userurl).toPromise().then(response=>{
      this.user.login = response.login
      this.user.public_repos = response.public_repos
      this.user.avatar_url = response.avatar_url
      this.user.followers =response.followers
      this.user.following = response.following

      resolve()
    },
    error=>{
      reject(error)
    })
  })
  return promise
}
}
