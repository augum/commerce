import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsstegComponent } from './list-conssteg.component';

describe('ListConsstegComponent', () => {
  let component: ListConsstegComponent;
  let fixture: ComponentFixture<ListConsstegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsstegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsstegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
