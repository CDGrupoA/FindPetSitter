import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterTagsComponent } from './sitter-tags.component';

describe('SitterTagsComponent', () => {
  let component: SitterTagsComponent;
  let fixture: ComponentFixture<SitterTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitterTagsComponent]
    });
    fixture = TestBed.createComponent(SitterTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
