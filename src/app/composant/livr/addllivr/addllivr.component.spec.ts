import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddllivrComponent } from './addllivr.component';

describe('AddllivrComponent', () => {
  let component: AddllivrComponent;
  let fixture: ComponentFixture<AddllivrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddllivrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddllivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
