import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private connectUser: User;

  constructor(
    private http: HttpClient,
  ) { }

  public login(user: User)
  {
    return this.http.post<User>(environment.api.url + 'login', user)
      .pipe(map((user) => {
        this.connectUser = user;
        sessionStorage.setItem('token', user.token.replace('Bearer ', ''));

        return user;
      }));
  }

  public logout()
  {
    this.connectUser = null;
    sessionStorage.clear();
  }

  get getUser(){
    return this.connectUser;
  }
}
