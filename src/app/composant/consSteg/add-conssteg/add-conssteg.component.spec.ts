import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsstegComponent } from './add-conssteg.component';

describe('AddConsstegComponent', () => {
  let component: AddConsstegComponent;
  let fixture: ComponentFixture<AddConsstegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsstegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsstegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
