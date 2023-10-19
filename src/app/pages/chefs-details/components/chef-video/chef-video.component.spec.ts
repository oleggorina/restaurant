import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefVideoComponent } from './chef-video.component';

describe('ChefVideoComponent', () => {
  let component: ChefVideoComponent;
  let fixture: ComponentFixture<ChefVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefVideoComponent]
    });
    fixture = TestBed.createComponent(ChefVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
