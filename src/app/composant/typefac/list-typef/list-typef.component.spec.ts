import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypefComponent } from './list-typef.component';

describe('ListTypefComponent', () => {
  let component: ListTypefComponent;
  let fixture: ComponentFixture<ListTypefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
