import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDessertsComponent } from './menu-desserts.component';

describe('MenuDessertsComponent', () => {
  let component: MenuDessertsComponent;
  let fixture: ComponentFixture<MenuDessertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDessertsComponent]
    });
    fixture = TestBed.createComponent(MenuDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
