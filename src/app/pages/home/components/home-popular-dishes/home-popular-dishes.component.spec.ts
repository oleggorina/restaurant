import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopularDishesComponent } from './home-popular-dishes.component';

describe('HomePopularDishesComponent', () => {
  let component: HomePopularDishesComponent;
  let fixture: ComponentFixture<HomePopularDishesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePopularDishesComponent]
    });
    fixture = TestBed.createComponent(HomePopularDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
