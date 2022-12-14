import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user.model";
import {parseFormGroup} from "../../../shared/utils/utility-function";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {Logger} from "../../../services/logger.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  entityForm: FormGroup;
  edit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    Logger.log('edit user', this.user);
    this.edit = !!this.user;

    this.entityForm = this.fb.group({
      username: [null, [Validators.required, Validators.maxLength(255)]],
      password: [null, !this.edit ? [Validators.required] : null],
      // passwordConfirm: [null, [Validators.required]],
      email: [null, [Validators.required]],
      address: this.fb.group({
        city: [null, [Validators.required]],
        country: [null, [Validators.required]],
        number: [null, [Validators.required]],
        state: [null, [Validators.required]],
        street: [null, [Validators.required]],
        zipCode: [null, [Validators.required, Validators.min(0)]],
      })
    });

    if(this.user)
    {
      this.entityForm.patchValue(this.user);
    } else {
      this.user = new User();
    }
  }

  get getAddressGroup(): FormGroup
  {
    return this.entityForm.get('address') as FormGroup;
  }

  submit()
  {
    Logger.log("SUBMIT FORM", this.entityForm);
    if(this.entityForm.invalid)
    {
      return;
    }

    parseFormGroup(this.entityForm, this.user);
    Logger.log('user', this.user);

    if(this.edit)
    {
      this.userService.update(this.user)
        .subscribe(() =>
        {
          this.router.navigate(['/user/', this.user.id, 'detail']);
        });
    } else
    {
      this.userService.insert(this.user)
        .subscribe(() =>
        {
          this.router.navigate(['/user']);
        });
    }
  }
}
