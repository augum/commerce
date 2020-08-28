import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConssonedeComponent } from './list-conssonede.component';

describe('ListConssonedeComponent', () => {
  let component: ListConssonedeComponent;
  let fixture: ComponentFixture<ListConssonedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConssonedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConssonedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
