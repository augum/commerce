import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFllivrComponent } from './add-fllivr.component';

describe('AddFllivrComponent', () => {
  let component: AddFllivrComponent;
  let fixture: ComponentFixture<AddFllivrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFllivrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFllivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
