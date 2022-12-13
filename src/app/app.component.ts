import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AbisApiFront';

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {

  }

  get isLoggedIn()
  {
    return !!this.authService.getUser;
  }

  logout()
  {
    this.authService.logout();
  }
}

