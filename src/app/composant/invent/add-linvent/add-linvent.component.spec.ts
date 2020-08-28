import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinventComponent } from './add-linvent.component';

describe('AddLinventComponent', () => {
  let component: AddLinventComponent;
  let fixture: ComponentFixture<AddLinventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLinventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
