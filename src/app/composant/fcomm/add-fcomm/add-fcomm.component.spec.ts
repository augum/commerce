import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFcommComponent } from './add-fcomm.component';

describe('AddFcommComponent', () => {
  let component: AddFcommComponent;
  let fixture: ComponentFixture<AddFcommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFcommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
