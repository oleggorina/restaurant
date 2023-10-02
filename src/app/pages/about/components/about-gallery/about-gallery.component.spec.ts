import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGalleryComponent } from './about-gallery.component';

describe('AboutGalleryComponent', () => {
  let component: AboutGalleryComponent;
  let fixture: ComponentFixture<AboutGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutGalleryComponent]
    });
    fixture = TestBed.createComponent(AboutGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
