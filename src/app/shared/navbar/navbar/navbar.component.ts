import {Component, OnInit} from '@angular/core';
import {NavbarConfig, NavbarItemConfig, NavbarPrivilege} from "../menu-provider";
import {Subscription} from "rxjs";
import {User} from "../../../models/user.model";
import {AuthService, RightEnum} from "../../../services/auth.service";
import {MenuProviderService} from "../../../services/menu-provider.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  config: NavbarConfig;
  authSubscription: Subscription;
  user: User;

  constructor(
    private authService: AuthService,
    private menuProvider: MenuProviderService,
  ) { }

  ngOnInit(): void {
    this.config = this.menuProvider.getMenuConfig;
  }

  processRights(item: NavbarItemConfig)
  {
    switch (item.privileges)
    {
      case NavbarPrivilege.NONE:
        return true;
      case NavbarPrivilege.DISCONECTED:
        return !this.authService.getUser;
      case NavbarPrivilege.AUTH:
        return this.authService.getUser;
      case NavbarPrivilege.ADMIN:
        return this.authService.hasRight(RightEnum.ADMIN);
      default:
        return false;
    }
  }

}
