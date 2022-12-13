import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params[''];

    if(isNaN(id))
    {
      this.router.navigate(['/']);
    }

    this.userService.getById(id)
      .subscribe((user) =>
      {
        this.user = user;
      })
  }

}
