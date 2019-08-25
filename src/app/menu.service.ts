import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  constructor() { }

  getItems(): Map<string, string> {
    const items = new Map<string, string>();
    items.set('/', 'Principale');
    items.set('/settings', 'Impostazioni');
    return items;
  }
      
}
