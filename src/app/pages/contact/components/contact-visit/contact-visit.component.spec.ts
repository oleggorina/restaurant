import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactVisitComponent } from './contact-visit.component';

describe('ContactVisitComponent', () => {
  let component: ContactVisitComponent;
  let fixture: ComponentFixture<ContactVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactVisitComponent]
    });
    fixture = TestBed.createComponent(ContactVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
