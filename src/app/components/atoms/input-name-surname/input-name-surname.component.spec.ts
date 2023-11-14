import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNameSurnameComponent } from './input-name-surname.component';

describe('InputNameSurnameComponent', () => {
  let component: InputNameSurnameComponent;
  let fixture: ComponentFixture<InputNameSurnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputNameSurnameComponent]
    });
    fixture = TestBed.createComponent(InputNameSurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
