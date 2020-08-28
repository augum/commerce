import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFcommComponent } from './list-fcomm.component';

describe('ListFcommComponent', () => {
  let component: ListFcommComponent;
  let fixture: ComponentFixture<ListFcommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFcommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
