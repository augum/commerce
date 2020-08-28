import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLcommsComponent } from './list-lcomms.component';

describe('ListLcommsComponent', () => {
  let component: ListLcommsComponent;
  let fixture: ComponentFixture<ListLcommsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLcommsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLcommsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
