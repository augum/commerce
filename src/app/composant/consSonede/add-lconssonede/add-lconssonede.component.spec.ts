import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLconssonedeComponent } from './add-lconssonede.component';

describe('AddLconssonedeComponent', () => {
  let component: AddLconssonedeComponent;
  let fixture: ComponentFixture<AddLconssonedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLconssonedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLconssonedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
