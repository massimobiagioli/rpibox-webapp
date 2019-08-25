import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });

  it('should return more than zero menuItems', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service.getItems().size).toBeGreaterThan(0);
  });
});
