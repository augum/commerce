import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListB1016Component } from './list-b1016.component';

describe('ListB1016Component', () => {
  let component: ListB1016Component;
  let fixture: ComponentFixture<ListB1016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListB1016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListB1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
