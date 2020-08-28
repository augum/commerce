import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddB1016Component } from './add-b1016.component';

describe('AddB1016Component', () => {
  let component: AddB1016Component;
  let fixture: ComponentFixture<AddB1016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddB1016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddB1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
