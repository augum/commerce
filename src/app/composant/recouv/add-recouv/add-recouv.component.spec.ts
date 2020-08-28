import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecouvComponent } from './add-recouv.component';

describe('AddRecouvComponent', () => {
  let component: AddRecouvComponent;
  let fixture: ComponentFixture<AddRecouvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecouvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
