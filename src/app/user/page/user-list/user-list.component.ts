import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<User>;
  displayColumns: string[] = ['id', 'username', 'email']
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.get()
      .subscribe((users) => {
        this.users = users;
        this.dataSource.data = this.users;
      });

    this.dataSource.paginator = this.paginator;
  }

}
