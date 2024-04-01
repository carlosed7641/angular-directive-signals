import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  menuItems = signal<MenuItem[]>([
    { title: 'Counter', route: 'counter' },
    { title: 'User', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' }
  ])

  // menuItems: MenuItem[] = [
  //   { title: 'Counter', route: 'counter' },
  //   { title: 'User', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ];
}
