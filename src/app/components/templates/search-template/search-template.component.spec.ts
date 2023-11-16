import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTemplateComponent } from './search-template.component';

describe('SearchTemplateComponent', () => {
  let component: SearchTemplateComponent;
  let fixture: ComponentFixture<SearchTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTemplateComponent]
    });
    fixture = TestBed.createComponent(SearchTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
