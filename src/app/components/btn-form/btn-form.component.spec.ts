import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFormComponent } from './btn-form.component';

describe('BtnFormComponent', () => {
  let component: BtnFormComponent;
  let fixture: ComponentFixture<BtnFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnFormComponent]
    });
    fixture = TestBed.createComponent(BtnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
