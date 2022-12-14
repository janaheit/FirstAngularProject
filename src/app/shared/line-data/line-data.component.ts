import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-data',
  templateUrl: './line-data.component.html',
  styleUrls: ['./line-data.component.css']
})
export class LineDataComponent implements OnInit {
  @Input() boldValue: string;
  @Input() textValue: string;
  @Input() boolValue: string;
  @Input() items: any[];
  @Input() prop: string;
  textValueComputed: string;
  textClass: string;
  
  constructor() { }

  ngOnInit(): void {
    this.textClass += ' nl2br';

    if(this.textValue)
    {
      this.textValueComputed = this.textValue;
    } else if(this.boolValue)
    {
      this.textValueComputed = this.boolValue ? 'Yes' : 'No';
    }
  }

}
