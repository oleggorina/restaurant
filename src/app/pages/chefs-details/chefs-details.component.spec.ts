import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsDetailsComponent } from './chefs-details.component';

describe('ChefsDetailsComponent', () => {
  let component: ChefsDetailsComponent;
  let fixture: ComponentFixture<ChefsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefsDetailsComponent]
    });
    fixture = TestBed.createComponent(ChefsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
