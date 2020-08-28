import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlivrComponent } from './add-flivr.component';

describe('AddFlivrComponent', () => {
  let component: AddFlivrComponent;
  let fixture: ComponentFixture<AddFlivrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlivrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
