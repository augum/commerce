import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlivrComponent } from './addlivr.component';

describe('AddlivrComponent', () => {
  let component: AddlivrComponent;
  let fixture: ComponentFixture<AddlivrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlivrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
