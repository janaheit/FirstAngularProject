import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ButtonType, TableConfig} from "../../../shared/table/models/table-config.model";
import {Entity} from "../../../models/entity.model";
import {Router} from "@angular/router";
import {AuthService, RightEnum} from "../../../services/auth.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  tableConfig: TableConfig;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.tableConfig = {
      columns: [
        {
          columnName: 'Id',
          value: 'id'
        },
        {
          columnName: 'Username',
          value: 'username'
        },
        {
          columnName: 'Email',
          value: 'email'
        },
      ],
      actions: [
        {
          actionName: 'edit',
          actionCb: (data: Entity) => {
            this.router.navigate(['/user', data.id, 'edit']);
          },
          type: ButtonType.SUCCESS
        },
        {
          actionName: 'detail',
          actionCb: (data: Entity) => {
            this.router.navigate(['/user', data.id, 'detail']);
          },
          type: ButtonType.SUBMIT
        },
      ],
      findDataCb: () => this.userService.findAll(),
      create: {
        actionName: 'Create user',
        actionCb: () => this.router.navigate(['/user/add']),
        canCreate: this.authService.hasRight(RightEnum.ADMIN)
      }
    }
  }

}
