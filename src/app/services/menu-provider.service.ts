import { Injectable } from '@angular/core';
import {NavbarConfig, NavbarGroupSide, NavbarItemType, NavbarPrivilege} from "../shared/navbar/menu-provider";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class MenuProviderService {
  private navbarConfig: NavbarConfig;

  constructor(
    private authService: AuthService,
  ) {
    this.navbarConfig = {
      name: 'Balrog Demo',
      itemGroups: [
        {
          groupSide: NavbarGroupSide.LEFT,
          items: [
            {
              value: 'Home',
              route: '/',
              itemType: NavbarItemType.BUTTON,
              privileges: NavbarPrivilege.NONE
            },
            {
              value: 'Shop',
              route: '/items',
              itemType: NavbarItemType.BUTTON,
              privileges: NavbarPrivilege.NONE
            },
            {
              value: 'Basket',
              route: '/basket',
              itemType: NavbarItemType.BUTTON,
              privileges: NavbarPrivilege.AUTH,
            },
            {
              value: 'Users',
              route: '/user',
              itemType: NavbarItemType.BUTTON,
              privileges: NavbarPrivilege.AUTH,
            },
          ]
        },
        {
          groupSide: NavbarGroupSide.RIGHT,
          items: [
            {
              value: 'Logout',
              callback: () => {
                this.authService.logout();
              },
              itemType: NavbarItemType.BUTTON,
              privileges: NavbarPrivilege.AUTH,
            },
            {
              value: 'Register',
              route: '/user/add',
              itemType: NavbarItemType.BUTTON,
              privileges: NavbarPrivilege.DISCONECTED
            },
            {
              value: 'Login',
              route: '/login',
              itemType: NavbarItemType.BUTTON,
              privileges: NavbarPrivilege.DISCONECTED
            },
          ]
        },
      ]
    };
  }

  get getMenuConfig()
  {
    return this.navbarConfig;
  }
}
