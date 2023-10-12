import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingChoiseComponent } from './booking-choise.component';

describe('BookingChoiseComponent', () => {
  let component: BookingChoiseComponent;
  let fixture: ComponentFixture<BookingChoiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingChoiseComponent]
    });
    fixture = TestBed.createComponent(BookingChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
