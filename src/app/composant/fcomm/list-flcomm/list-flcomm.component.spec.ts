import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFlcommComponent } from './list-flcomm.component';

describe('ListFlcommComponent', () => {
  let component: ListFlcommComponent;
  let fixture: ComponentFixture<ListFlcommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFlcommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFlcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
