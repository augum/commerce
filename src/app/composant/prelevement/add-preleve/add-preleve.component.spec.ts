import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreleveComponent } from './add-preleve.component';

describe('AddPreleveComponent', () => {
  let component: AddPreleveComponent;
  let fixture: ComponentFixture<AddPreleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPreleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPreleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
