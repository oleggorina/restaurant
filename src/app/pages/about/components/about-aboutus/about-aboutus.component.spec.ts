import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAboutusComponent } from './about-aboutus.component';

describe('AboutAboutusComponent', () => {
  let component: AboutAboutusComponent;
  let fixture: ComponentFixture<AboutAboutusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAboutusComponent]
    });
    fixture = TestBed.createComponent(AboutAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
