import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hasVerticalMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileButton(): void {
    this.hasVerticalMenu = !this.hasVerticalMenu;
  }

  none(): void {

  }

}
