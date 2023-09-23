import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLeftComponent } from './footer-left.component';

describe('FooterLeftComponent', () => {
  let component: FooterLeftComponent;
  let fixture: ComponentFixture<FooterLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterLeftComponent]
    });
    fixture = TestBed.createComponent(FooterLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
