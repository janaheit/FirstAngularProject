import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  entityForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.entityForm = this.fb.group({
      username: [null],
      password: [null]
    });
  }

  submit(){
    if(this.entityForm.invalid)
    {
      return;
    }

    let user = new User();
    user.password = this.entityForm.controls['password'].value;
    user.username = this.entityForm.controls['username'].value;

    this.authService.login(user)
      .subscribe((user) =>
      {
        console.log(user);
        this.router.navigate(['/user']);
      })
  }
}
