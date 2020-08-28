import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactComponent } from './list-fact.component';

describe('ListFactComponent', () => {
  let component: ListFactComponent;
  let fixture: ComponentFixture<ListFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
