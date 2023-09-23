import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRightComponent } from './footer-right.component';

describe('FooterRightComponent', () => {
  let component: FooterRightComponent;
  let fixture: ComponentFixture<FooterRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterRightComponent]
    });
    fixture = TestBed.createComponent(FooterRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
