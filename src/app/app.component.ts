import { Component, OnInit } from '@angular/core';
import { Sidenav } from "materialize-css";
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuItems: Map<string, string>;

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getItems();
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      this.getMenuInstances();
    });
  }

  closeNav(): void {
    const instances: Sidenav[] = this.getMenuInstances();
    instances.forEach(instance => {
      instance.close();
    });  
  }

  private getMenuInstances(): Sidenav[] {
    const elems = document.querySelectorAll('.sidenav');
    const options = {};
    return Sidenav.init(elems, options);
  }

}
