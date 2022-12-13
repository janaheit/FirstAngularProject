import { Injectable } from '@angular/core';
import {Crud, CrudConfig} from "./crud";
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";

const config: CrudConfig = {
  many: 'user',
  single: (id) => `user/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class UserService extends Crud<User> {

  constructor(
    protected httpC: HttpClient,
  )
  {
    super(httpC, config);
  }
}
