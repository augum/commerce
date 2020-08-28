import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLrecoufComponent } from './add-lrecouf.component';

describe('AddLrecoufComponent', () => {
  let component: AddLrecoufComponent;
  let fixture: ComponentFixture<AddLrecoufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLrecoufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLrecoufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
