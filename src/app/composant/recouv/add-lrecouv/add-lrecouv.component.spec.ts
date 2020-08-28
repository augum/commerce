import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLrecouvComponent } from './add-lrecouv.component';

describe('AddLrecouvComponent', () => {
  let component: AddLrecouvComponent;
  let fixture: ComponentFixture<AddLrecouvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLrecouvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLrecouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
