import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStartersComponent } from './menu-starters.component';

describe('MenuStartersComponent', () => {
  let component: MenuStartersComponent;
  let fixture: ComponentFixture<MenuStartersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuStartersComponent]
    });
    fixture = TestBed.createComponent(MenuStartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
