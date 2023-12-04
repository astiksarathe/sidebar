import { Component } from '@angular/core';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [MenuItemComponent, CommonModule]
})
export class MenuComponent {
  isSidebarOpen = true;
  menuItems = [
    { title: 'Scores', icon: "../../assets/icons/speedometer.svg", path:"/scores" },
    { title: 'Inbox', icon: "../../assets/icons/inbox.svg", path:"/inbox" },
    { title: 'Engagement', icon: "../../assets/icons/Component 437 – 1.svg",path:"/engagement" },
    {
      title: 'Admin',
      icon: "../../assets/icons/admin.svg",
      submenu: [
        { title: 'General (account)',  path:"/x"  },
        { title: 'Projects',  path:"/x"  },
        {
          title: 'Sub account',
          submenu: [
            { title: 'Notifications',  path:"/x"  },
          ],
        },
        { title: 'User access',  path:"/x"  },
        { title: 'Configure dashboard',  path:"/x"  },
        { title: 'Security',  path:"/x"  },
        { title: 'Notification',  path:"/x"  },
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
