import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLcommsComponent } from './add-lcomms.component';

describe('AddLcommsComponent', () => {
  let component: AddLcommsComponent;
  let fixture: ComponentFixture<AddLcommsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLcommsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLcommsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
