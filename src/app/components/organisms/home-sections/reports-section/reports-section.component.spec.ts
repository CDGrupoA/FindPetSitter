import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSectionComponent } from './reports-section.component';

describe('ReportsSectionComponent', () => {
  let component: ReportsSectionComponent;
  let fixture: ComponentFixture<ReportsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsSectionComponent]
    });
    fixture = TestBed.createComponent(ReportsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
