import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user.model";
import {parseFormGroup} from "../../../shared/utils/utility-function";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  entityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.entityForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      passwordConfirm: [null, [Validators.required]],
      email: [null, [Validators.required]],
      roles: [null, [Validators.required]],
      address: this.fb.group({
        city: [null, [Validators.required]],
        country: [null, [Validators.required]],
        number: [null, [Validators.required]],
        state: [null, [Validators.required]],
        street: [null, [Validators.required]],
        zipCode: [null, [Validators.required]],
      })
    });

    if(this.user)
    {
      this.entityForm.patchValue(this.user);
    } else {
      this.user = new User();
    }
  }

  submit()
  {
    if(this.entityForm.invalid)
    {
      return;
    }

    parseFormGroup(this.entityForm, this.user);

    this.userService.post(this.user)
      .subscribe(() =>
      {
        this.router.navigate(['/user/', this.user.id]);
      })
  }
}
