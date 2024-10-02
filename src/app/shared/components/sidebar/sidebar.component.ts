import { Component } from '@angular/core';
import { RutasMenu } from '../../interfaces/rutas-menu.interface';

const Menus: RutasMenu[] = [
  // {
  //   nombre: 'Home',
  //   url: 'home'
  // },
  // {
  //   nombre: 'About',
  //   url: 'about'
  // },
  // {
  //   nombre: 'Contact',
  //   url: 'contact'
  // },
  {
    nombre: 'Por capital',
    url: 'countries/by-capital'
  },
  {
    nombre: 'Por país',
    url: 'countries/by-country'
  },
  {
    nombre: 'Por region',
    url: 'countries/by-region'
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
