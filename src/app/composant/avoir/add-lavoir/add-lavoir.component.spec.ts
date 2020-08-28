import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLavoirComponent } from './add-lavoir.component';

describe('AddLavoirComponent', () => {
  let component: AddLavoirComponent;
  let fixture: ComponentFixture<AddLavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
