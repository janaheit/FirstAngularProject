import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";
import {Logger} from "../../../services/logger.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  edit: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    Logger.log('edit user id', id);
    if(!isNaN(id))
    {
      this.edit = true;
      this.userService.find(id)
        .subscribe((user) => {
          this.user = user;
          Logger.log('find user', user);
        })
    }
  }

}
