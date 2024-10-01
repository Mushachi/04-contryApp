import { Component } from '@angular/core';
import { RutasMenu } from '../interfaces/rutas-menu.interface';

const Menus: RutasMenu[] = [
  {
    nombre: 'Home',
    url: 'home'
  },
  {
    nombre: 'About',
    url: 'about'
  },
  {
    nombre: 'Contact',
    url: 'contact'
  },
];

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  public listaMenu: RutasMenu[] = Menus;

}
