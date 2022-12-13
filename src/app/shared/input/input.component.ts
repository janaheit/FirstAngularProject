import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Logger} from "../../services/logger.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  @Input() control: FormControl;

  constructor() {
  }

  ngOnInit(): void {
  }

  getErrors()
  {
    let errors: string[] = [];

    for (const errName in this.control.errors)
    {
      Logger.log(errName, this.control.errors[errName]);
      const error = this.control.errors[errName];

      switch (errName)
      {
        case 'required':
          errors.push('required');
          break;
        case 'min':
          errors.push(`minimum value : ${error.min}`);
          break;
        case 'max':
          errors.push(`maximum value : ${error.max}`);
          break;
        case 'maxLength':
          errors.push(`maximum length : ${error.max}`);
          break;
        default:
          errors.push(error);
      }
    }

    return errors.join(', ');
  }
}
