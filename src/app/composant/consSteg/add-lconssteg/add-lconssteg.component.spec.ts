import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLconsstegComponent } from './add-lconssteg.component';

describe('AddLconsstegComponent', () => {
  let component: AddLconsstegComponent;
  let fixture: ComponentFixture<AddLconsstegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLconsstegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLconsstegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
