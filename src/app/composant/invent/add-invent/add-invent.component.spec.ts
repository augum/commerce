import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventComponent } from './add-invent.component';

describe('AddInventComponent', () => {
  let component: AddInventComponent;
  let fixture: ComponentFixture<AddInventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
