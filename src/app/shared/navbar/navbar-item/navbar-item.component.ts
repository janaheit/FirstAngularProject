import {Component, Input, OnInit} from '@angular/core';
import {NavbarItemConfig} from "../menu-provider";

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {
  @Input() item: NavbarItemConfig;
  
  constructor() { }

  ngOnInit(): void {
  }

}
