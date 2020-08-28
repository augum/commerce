import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommsComponent } from './list-comms.component';

describe('ListCommsComponent', () => {
  let component: ListCommsComponent;
  let fixture: ComponentFixture<ListCommsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
