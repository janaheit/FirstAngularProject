import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";
import {map, Subject} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserService} from "./user.service";
import {NavbarPrivilege} from "../shared/navbar/menu-provider";
import {Logger} from "./logger.service";

class DecodedToken
{
  id: number;
  sub: string;
  exp: number;
  roles: string[];
}

export enum RightEnum
{
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private connectUser: User;
  private authStatusSubject: Subject<User>;

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService,
    private userService: UserService,
  ) {
    this.authStatusSubject = new Subject<User>();
    // check if user is connected
    if(sessionStorage.getItem('token'))
    {
      let user = new User();
      user.token = sessionStorage.getItem('token');
      this.processToken(user);
      Logger.log('Connected user', this.connectUser);
      this.userService.getById(this.connectUser.id)
        .subscribe((user) => {
          user.token = this.connectUser.token;
          this.connectUser = user;
          this.authStatusSubject.next(user);
        });
    }
  }

  get authStatusChanged()
  {
    return this.authStatusSubject.asObservable();
  }

  public login(user: User)
  {
    return this.http.post<User>(environment.api.url + 'login', user)
      .pipe(map((user) => {
        if(user && user.token)
        {
          this.processToken(user);
        }

        this.authStatusSubject.next(user);

        return user;
      }));
  }

  public logout()
  {
    this.connectUser = null;
    sessionStorage.clear();
    this.authStatusSubject.next(null);
  }

  private processToken(user: User)
  {
    let token = user.token.replace('Bearer ', '');
    sessionStorage.setItem('token', token);
    const decodeToken = this.jwtService.decodeToken(token) as DecodedToken;

    let expTime = (decodeToken.exp * 1000) - Date.now();
    this.connectUser = user;
    this.connectUser.id = decodeToken.id;

    if(expTime <= 0)
    {
      this.logout();
    }
  }

  get getUser(){
    if(this.connectUser)
    {
      // to check if the token is still valid
      this.processToken(this.connectUser);
    }

    return this.connectUser;
  }

  hasRight(right: RightEnum)
  {
    return this.connectUser.roles.includes(right);
  }
}
