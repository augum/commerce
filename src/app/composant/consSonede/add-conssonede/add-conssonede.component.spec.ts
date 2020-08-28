import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConssonedeComponent } from './add-conssonede.component';

describe('AddConssonedeComponent', () => {
  let component: AddConssonedeComponent;
  let fixture: ComponentFixture<AddConssonedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConssonedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConssonedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
