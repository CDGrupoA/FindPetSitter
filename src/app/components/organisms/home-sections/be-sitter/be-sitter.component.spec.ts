import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeSitterComponent } from './be-sitter.component';

describe('BeSitterComponent', () => {
  let component: BeSitterComponent;
  let fixture: ComponentFixture<BeSitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeSitterComponent]
    });
    fixture = TestBed.createComponent(BeSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
