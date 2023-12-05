import { Component } from '@angular/core';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [RouterOutlet, MenuItemComponent, CommonModule]
})
export class MenuComponent {
  isSidebarOpen = true;
  menuItems = [
    { title: 'Scores', icon: "../../assets/icons/speedometer.svg", path: "/scores" },
    { title: 'Inbox', icon: "../../assets/icons/inbox.svg", path: "/inbox" },
    { title: 'Engagement', icon: "../../assets/icons/Component 437 – 1.svg", path: "/engagement" },
    {
      title: 'Admin',
      icon: "../../assets/icons/admin.svg",
      path: '/admin',
      submenu: [
        { title: 'General (account)', path: "/general" },
        { title: 'Projects', path: "/project" },
        {
          title: 'Sub account',
          path: '/admin/sub-accounts',
          submenu: [
            { title: 'Notifications', path: "/admin/sub-accounts/notification" },
          ],
        },
        { title: 'User access', path: "/admin/sub-accounts/user-access" },
        { title: 'Configure dashboard', path: "/admin/sub-accounts/configure-dashboard" },
        { title: 'Security', path: "/admin/sub-accounts/security" },
        { title: 'Notification', path: "/admin/notification" },
      ],
    },
  ];
  constructor() {
    this.openSideBar = this.openSideBar.bind(this)
  }

  openSideBar() {

    this.isSidebarOpen = false;
  }
  handleSidebarToggle() {
    this.resetSubMenuState(this.menuItems)
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  resetSubMenuState(items: any[]): void {
    items.forEach(item => {
      item.showSubMenu = false;

      // Recursively reset showSubMenu for nested submenus
      if (item.submenu) {
        this.resetSubMenuState(item.submenu);
      }
    });
  }
}
