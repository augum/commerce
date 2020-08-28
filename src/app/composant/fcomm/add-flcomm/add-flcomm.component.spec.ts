import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlcommComponent } from './add-flcomm.component';

describe('AddFlcommComponent', () => {
  let component: AddFlcommComponent;
  let fixture: ComponentFixture<AddFlcommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlcommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
