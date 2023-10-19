import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsSkillComponent } from './chefs-skill.component';

describe('ChefsSkillComponent', () => {
  let component: ChefsSkillComponent;
  let fixture: ComponentFixture<ChefsSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefsSkillComponent]
    });
    fixture = TestBed.createComponent(ChefsSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
