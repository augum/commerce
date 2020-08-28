import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBs1016Component } from './add-bs1016.component';

describe('AddBs1016Component', () => {
  let component: AddBs1016Component;
  let fixture: ComponentFixture<AddBs1016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBs1016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBs1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
