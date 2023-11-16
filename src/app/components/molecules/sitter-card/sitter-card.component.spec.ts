import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterCardComponent } from './sitter-card.component';

describe('SitterCardComponent', () => {
  let component: SitterCardComponent;
  let fixture: ComponentFixture<SitterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitterCardComponent]
    });
    fixture = TestBed.createComponent(SitterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
