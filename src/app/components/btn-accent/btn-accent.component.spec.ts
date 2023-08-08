import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAccentComponent } from './btn-accent.component';

describe('BtnAccentComponent', () => {
  let component: BtnAccentComponent;
  let fixture: ComponentFixture<BtnAccentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnAccentComponent]
    });
    fixture = TestBed.createComponent(BtnAccentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
