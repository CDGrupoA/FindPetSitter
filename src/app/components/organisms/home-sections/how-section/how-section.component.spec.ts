import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowSectionComponent } from './how-section.component';

describe('HowSectionComponent', () => {
  let component: HowSectionComponent;
  let fixture: ComponentFixture<HowSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowSectionComponent]
    });
    fixture = TestBed.createComponent(HowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
