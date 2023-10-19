import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsTestimonialComponent } from './chefs-testimonial.component';

describe('ChefsTestimonialComponent', () => {
  let component: ChefsTestimonialComponent;
  let fixture: ComponentFixture<ChefsTestimonialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefsTestimonialComponent]
    });
    fixture = TestBed.createComponent(ChefsTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
