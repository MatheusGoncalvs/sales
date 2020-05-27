import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hasVerticalMenu = false;
  mouseInPopup = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileButton(): void {
    this.hasVerticalMenu = !this.hasVerticalMenu;
  }

  onPopupMouseIn() : void {
      this.mouseInPopup = true;
  }

  onPopupMouseOut() : void {
      this.mouseInPopup = false;
  }

  none(): void {}

}
