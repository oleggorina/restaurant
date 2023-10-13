import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsTeamComponent } from './chefs-team.component';

describe('ChefsTeamComponent', () => {
  let component: ChefsTeamComponent;
  let fixture: ComponentFixture<ChefsTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefsTeamComponent]
    });
    fixture = TestBed.createComponent(ChefsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
