import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLbs1016Component } from './add-lbs1016.component';

describe('AddLbs1016Component', () => {
  let component: AddLbs1016Component;
  let fixture: ComponentFixture<AddLbs1016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLbs1016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLbs1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
