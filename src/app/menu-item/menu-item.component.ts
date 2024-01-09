import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  @Input() menuItems: any;
  @Input() item: any;
  @Input() openSideBar: any;
  @Input() isSidebarOpen: boolean = false;
  @Input() isMainMenu: boolean = false;

  toggleSubMenu() {
    this.openSideBar();
    if (this.item.submenu) {
      this.item.showSubMenu = !this.item.showSubMenu;
      if (!this.item.showSubMenu) this.resetSubMenuState(this.item.submenu);
    }
  }

  resetSubMenuState(items: any[]): void {
    items.forEach((item) => {
      item.showSubMenu = false;

      // Recursively reset showSubMenu for nested submenus
      if (item.submenu) {
        this.resetSubMenuState(item.submenu);
      }
    });
  }
}
