import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryReservationComponent } from './gallery-reservation.component';

describe('GalleryReservationComponent', () => {
  let component: GalleryReservationComponent;
  let fixture: ComponentFixture<GalleryReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryReservationComponent]
    });
    fixture = TestBed.createComponent(GalleryReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
