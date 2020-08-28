import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLavoirComponent } from './list-lavoir.component';

describe('ListLavoirComponent', () => {
  let component: ListLavoirComponent;
  let fixture: ComponentFixture<ListLavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
