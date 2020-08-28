import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBs1016Component } from './list-bs1016.component';

describe('ListBs1016Component', () => {
  let component: ListBs1016Component;
  let fixture: ComponentFixture<ListBs1016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBs1016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBs1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
