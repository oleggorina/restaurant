import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCountsComponent } from './about-counts.component';

describe('AboutCountsComponent', () => {
  let component: AboutCountsComponent;
  let fixture: ComponentFixture<AboutCountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCountsComponent]
    });
    fixture = TestBed.createComponent(AboutCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
