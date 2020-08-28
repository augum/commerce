import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommsComponent } from './add-comms.component';

describe('AddCommsComponent', () => {
  let component: AddCommsComponent;
  let fixture: ComponentFixture<AddCommsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
