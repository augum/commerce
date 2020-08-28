import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLconsstegComponent } from './list-lconssteg.component';

describe('ListLconsstegComponent', () => {
  let component: ListLconsstegComponent;
  let fixture: ComponentFixture<ListLconsstegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLconsstegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLconsstegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
