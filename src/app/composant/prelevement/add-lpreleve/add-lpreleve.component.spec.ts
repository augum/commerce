import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLpreleveComponent } from './add-lpreleve.component';

describe('AddLpreleveComponent', () => {
  let component: AddLpreleveComponent;
  let fixture: ComponentFixture<AddLpreleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLpreleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLpreleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
