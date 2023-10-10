import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMainDishComponent } from './menu-main-dish.component';

describe('MenuMainDishComponent', () => {
  let component: MenuMainDishComponent;
  let fixture: ComponentFixture<MenuMainDishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMainDishComponent]
    });
    fixture = TestBed.createComponent(MenuMainDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
