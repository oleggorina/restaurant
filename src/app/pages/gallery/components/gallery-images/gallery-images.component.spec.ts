import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImagesComponent } from './gallery-images.component';

describe('GalleryImagesComponent', () => {
  let component: GalleryImagesComponent;
  let fixture: ComponentFixture<GalleryImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryImagesComponent]
    });
    fixture = TestBed.createComponent(GalleryImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
