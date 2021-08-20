import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

import { Repository } from './repository';
@Injectable({
  providedIn: 'root'
})
export class RepoService {
repo!:Repository
  constructor(private http:HttpClient) { 
    this.repo = new Repository("", "","",)
  }
  repoRequest(){
    interface ApiResponse{
      name:string;
      description:string;
      url:string;
  }
  let promise = new Promise<void>((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/david-njungo/repos").toPromise().then(response=>{
      this.repo.name = response.name
      this.repo.description = response.description
      this.repo.url = response.url
      resolve()
    },
    error=>{
      reject(error)
    })
  })
  return promise
}
}
